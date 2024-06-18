import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlusCircle } from "react-icons/fi";

import { AuthContext } from "../../contexts/auth";
import { db } from "../../services/firebaseConnection";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

import "./new.css";
import { set } from "date-fns";

const listRef = collection(db, "customers");

// Função para registrar um novo chamado
export default function New() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  /* Estados para armazenar os valores dos inputs 
  * Criar useState para armazenar os valores dos inputs
  * do formulário que incluem customers, loadCustomer, customerSelected,
  * idCustomer, complemento, assunto e status 
  */

  useEffect(() => {
    // Função para carregar os clientes
    async function loadCustomers() {

      /* TO DO 
      * Criar uma constante querySnapshot que recebe a função getDocs com o parâmetro listRef
      * Criar uma lista vazia
      * Criar um forEach para percorrer os documentos do snapshot
      * Adicionar um objeto com id e nome do documento na lista
      * Verificar se o tamanho dos documentos é igual a 0
      * Se for igual a 0, exibir um console.log e uma mensagem de erro
      * Se for diferente de 0, setar os clientes e o loadCustomer como false
      * Verificar se o id existe
      * Se existir, chamar a função loadId com a lista
      * Se não existir, não fazer nada
      * Adicionar um catch para exibir um console.log e uma mensagem de erro
      * Setar o loadCustomer como false e os clientes como um objeto com id 1 e nome FREELA
      * 
      */
    }
    // Chamar a função loadCustomers
    loadCustomers();
  }, [id]);

  // Função para carregar o chamado pelo id
  async function loadId(lista) {

    /**
     * TO DO
     * Chamada do método getDoc para buscar o chamado pelo id e setar os valores
     * dos estados assunto, status, complemento
     */

  }

  // Função para atualizar o chamado
  function handleOptionChange(e) {
    /* TO DO */
  }

  // Função para atualizar o chamado
  function handleChangeSelect(e) {
    /* TO DO */
  }

  // Função para atualizar o chamado
  function handleChangeCustomer(e) {
    /* TO DO */
  }

  // Função para registrar um chamado
  async function handleRegister(e) {
    e.preventDefault();
    // Verificar se o id do cliente foi selecionado
    if (idCustomer) {
      // Verificar se o assunto foi preenchido e o status foi selecionado 
      /* TO DO */
    }

    //Registrar um chamado
    // Adicionar um documento na coleção chamados com os valores do chamado 
    /* TO DO */

  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name={id ? "Editando Chamado" : "Novo Chamado"}>
          <FiPlusCircle size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Clientes</label>
            {loadCustomer ? (
              <input type="text" disabled={true} value="Carregando..." />
            ) : (
              <select value={customerSelected} onChange={handleChangeCustomer}>
                {customers.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
            )}

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Técnica">Visita Técnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === "Aberto"}
              />
              <span>Em aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === "Progresso"}
              />
              <span>Progresso</span>

              <input
                type="radio"
                name="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={status === "Atendido"}
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />

            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
