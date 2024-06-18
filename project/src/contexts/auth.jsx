import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AuthContext = createContext({});


/* Esta função AuthProvider é um componente que irá envolver toda a aplicação 
para que todos os componentes tenham acesso ao contexto de autenticação.
Ou seja, todos os componentes terão acesso a informações de autenticação, como 
usuário logado, funções de login, cadastro e logout, e informações de loading.

Passamos children como parâmetro para que todos os componentes filhos tenham acesso
ao contexto de autenticação 
*/
function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Verificar se o usuário está logado ao carregar a página 
  useEffect(() => {
    // Função para verificar se o usuário está logado, para isso é verificado se
    // existe um usuário no localStorage 
    async function loadUser(){
      const storageUser = localStorage.getItem('@ticketsPRO')

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false);
      }
      setLoading(false);
    }

    loadUser();
  }, [])

  // Função para realizar o login do usuário 
  async function signIn(email, password){
    setLoadingAuth(true);

    // Chamada da função signInWithEmailAndPassword para realizar o login do usuário
    await signInWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
      let uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef)
      // Armazenar os dados do usuário no localStorage 
      let data = {
        uid: uid,
        nome: docSnap.data().nome,
        email: value.user.email,
        avatarUrl: docSnap.data().avatarUrl
      }

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success("Bem-vindo(a) de volta!")
      navigate("/dashboard")
    })
    .catch((error) => {
      console.log(error);
      setLoadingAuth(false);
      toast.error("Erro ao realizar login!");
    }) 

  }


  // Cadastrar um novo user
  async function signUp(email, password, name){
    setLoadingAuth(true);

    // Chamada da função createUserWithEmailAndPassword para realizar o cadastro do usuário
    await createUserWithEmailAndPassword(auth, email, password)
    .then( async (value) => {
        let uid = value.user.uid
        // Criação de um documento no Firestore para armazenar os dados do usuário
        await setDoc(doc(db, "users", uid), {
          name: name,
          avatarUrl: null
        })
        .then( () => {
          // Armazenar os dados do usuário no localStorage
          let data = {
            uid: uid,
            name: name,
            email: value.user.email,
            avatarUrl: null
          };

          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
          toast.success("Seja bem-vindo ao sistema!")
          navigate("/dashboard")
          
        })


    })
    .catch((error) => {
      console.log(error);
      if(error.code === 'auth/weak-password'){
        toast.error("Senha muito fraca! Insira pelo menos 6 caracteres.");
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error("Este email já está em uso!");
      }
      setLoadingAuth(false);
    })

  }

  // Função para armazenar os dados do usuário no localStorage
  function storageUser(data){
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }

  // Função para realizar o logout do usuário
  async function logout(){
    await signOut(auth);
    localStorage.removeItem('@ticketsPRO');
    setUser(null);
  }

  return (
    /* O AuthContext.Provider é um componente que irá envolver toda a aplicação
     para que todos os componentes tenham acesso ao contexto de autenticação 
     Por isso, passamos o value com as informações de autenticação, como usuário
      logado, funções de login, cadastro e logout, e informações de loading 
      para que todos os componentes tenham acesso a essas informações
    */
     <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;