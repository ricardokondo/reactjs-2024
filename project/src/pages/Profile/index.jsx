import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";

import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";
import { useContext, useState } from "react";
import "./profile.css";
import { toast } from "react-toastify";

import { db, storage } from "../../services/firebaseConnection";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Profile() {
  // useContext é um hook que permite a utilização de um contexto em um componente funcional.
  // Nesse caso, estou utilizando o contexto AuthContext que foi criado em contexts/auth.js e que contém as informações do usuário logado.
  const { user, storageUser, setUser, logout } = useContext(AuthContext);
  // useState passo como parâmetro o valor de avatarUrl que é o avatarUrl do usuário logado e setAvatarUrl é a função que vai alterar o valor de avatarUrl
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  const [nome, setNome] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);

  function handleFile(e) {
    //console.log(e.target.files);
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setAvatarUrl(URL.createObjectURL(image));
        setImageAvatar(image);
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        toast.error("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatar(null);
        return null;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    // local para onde a imagem será enviada
    // ref(storage, `images/${currentUid}/${imageAvatar.name}`) é o caminho onde a imagem será salva
    // storage é a variável que contém a conexão com o firebase
    const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`); // template string é usado para concatenar strings
    // updaload da imagem para o local escolhido
    // método uploadBytesResumable é usado para fazer o upload da imagem para o firebase
    const uploadTask = uploadBytesResumable(uploadRef, imageAvatar).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          let urlFoto = downloadURL;
          const docRef = doc(db, "users", currentUid);

          await updateDoc(docRef, {
            avatarUrl: urlFoto,
            name: nome,
          }).then(() => {
            let data = {
              ...user,
              avatarUrl: urlFoto,
              name: nome,
            };
            setUser(data);
            storageUser(data);
            toast.success("Foto de perfil e Nome alterada com sucesso!");
          });
        });
      }
    );
  }

  async function hanldeSubmit(e) {
    // preventDefault() evita o comportamento padrão do formulário que é enviar os dados para uma outra página
    e.preventDefault();
    if (imageAvatar === null && nome !== "") {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        name: nome,
      }).then(() => {
        let data = {
          // ...user é um spread operator que copia todos os valores de user e altera o valor de name
          ...user,
          name: nome,
        };
        setUser(data);
        storageUser(data);
        toast.success("Nome alterado com sucesso!");
      });
    } else if (nome !== "" && imageAvatar !== null) {
      // Atualizar nome e foto
      // chamando a função handleUpload que faz o upload da imagem
      handleUpload();
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Minha Conta">
          <FiSettings size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={hanldeSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />{" "}
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  width={250}
                  height={250}
                  alt="Foto de perfil"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width={250}
                  height={250}
                  alt="Foto de perfil"
                />
              )}
            </label>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>E-mail</label>
            <input type="text" value={email} disabled={true} />
            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="container">
          <button className="logout-btn" onClick={() => logout()}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
