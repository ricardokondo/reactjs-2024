import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";
import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

function Customers() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (nome !== "" && cnpj !== "" && endereco !== "") {
      // addDoc é um método do firebase que adiciona um documento a uma coleção no firestore
      await addDoc(collection(db, "customers"), {
        nome: nome,
        cnpj: cnpj,
        endereco: endereco,
      })
        .then(() => {
          setNome("");
          setCnpj("");
          setEndereco("");
          toast.success("Cliente cadastrado com sucesso!");
        })
        .catch((error) => {
          console.log("Erro ao cadastrar o cliente: ", error);
          toast.error("Erro ao cadastrar o cliente!");
        });
    } else {
      toast.warn("Preencha todos os campos!");
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Clientes">
          <FiUsers size={25} />
        </Title>
        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome Fantasia</label>
            <input
              type="text"
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>CNPJ</label>
            <input
              type="text"
              placeholder="00.000.000/0001-00"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Digite seu enderço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Customers;
