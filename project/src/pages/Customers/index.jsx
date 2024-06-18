import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";
import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

function Customers() {
  // Estados para armazenar os valores dos inputs
  // Criar useState para armazenar os valores dos inputs
  // do formulário que incluem nome, cnpj e endereço

  /* TO DO dos useStates*/

  // Função para cadastrar um cliente no banco de dados firestore do firebase 
  async function handleRegister(e) {
    e.preventDefault();

    // TO DO
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
              onChange={/* TO DO */}
            />
            <label>CNPJ</label>
            <input
              type="text"
              placeholder="00.000.000/0001-00"
              value={cnpj}
              onChange={/* TO DO */}
            />
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Digite seu enderço"
              value={endereco}
              onChange={/* TO DO */}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Customers;
