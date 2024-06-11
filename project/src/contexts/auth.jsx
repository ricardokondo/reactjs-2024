import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@tickets");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  async function signIn(email, password) {
    console.log(email, password);
    //alert("Logado com sucesso!");
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        let data = {
          uid: uid,
          name: docSnap.data().name,
          avatarUrl: docSnap.data().avatarUrl,
          email: value.user.email,
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success("Bem-vindo(a) de volta!");
        //alert("Bem vindo de volta!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
        alert("Ops algo deu errado durante o login!");
      });
  }

  // cadastrar usuario
  async function signUp(email, password, name) {
    console.log(email, password, name);
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await setDoc(doc(db, "users", uid), {
          name: name,
          avatarUrl: null,
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success("Bem-vindo ao sistema!");
            //alert("Bem vindo a plataforma!");
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
            setLoadingAuth(false);
            alert("Ops algo deu errado!");
          });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
        alert("Ops algo deu errado!");
      });
  }

  function storageUser(data) {
    localStorage.setItem("@tickets", JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem("@tickets");
    setUser(null);
    navigate("/");

    toast.info("Você saiu do sistema!");
    //alert("Você saiu do sistema!");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, // Coneverte o valor para booleano (true ou false)
        user,
        signIn,
        signUp,
        loadingAuth,
        loading,
        logout,
        storageUser,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
