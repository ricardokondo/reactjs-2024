import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Modal from "../../components/Modal";

import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";

import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  orderBy,
  limit,
  startAfter,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { format } from "date-fns";

import "./dashboard.css";

const listRef = collection(db, "chamados");

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDoc, setLastDoc] = useState();
  const [loadMore, setLoadMore] = useState(false);

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function loadChamados() {
      const q = query(listRef, orderBy("created", "desc"), limit(5));

      const querySnapshot = await getDocs(q);
      // Limpa a lista de chamados para não duplicar os registros ao atualizar a página com o mesmo usuário
      setChamados([]);
      await updateState(querySnapshot);

      setLoading(false);
    }

    loadChamados();

    return () => {};
  }, []);

  async function updateState(querySnapshot) {
    const isCollectionEmpty = querySnapshot.size === 0;

    if (!isCollectionEmpty) {
      let lista = [];

      querySnapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          assunto: doc.data().assunto,
          cliente: doc.data().cliente,
          clienteId: doc.data().clienteId,
          created: doc.data().created,
          createdFormat: format(doc.data().created.toDate(), "dd/MM/yyyy"),
          status: doc.data().status,
          complemento: doc.data().complemento,
        });
      });

      setChamados((chamados) => [...chamados, ...lista]);

      // Busca o último documento carregado na lista
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastDoc);
    } else {
      setIsEmpty(true);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div>
        <Header />

        <div className="content">
          <Title name="Tickets">
            <FiMessageSquare size={25} />
          </Title>

          <div className="container dashboard">
            <span>Buscando chamados...</span>
          </div>
        </div>
      </div>
    );
  }

  async function handleLoadMore() {
    setLoadMore(true);

    const q = query(
      listRef,
      orderBy("created", "desc"),
      startAfter(lastDoc),
      limit(5)
    );

    const querySnapshot = await getDocs(q);

    await updateState(querySnapshot);

    setLoadMore(false);
  }

  function toogleModal(item) {
    setShowPostModal(!showPostModal);
    setDetail(item);
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>

        <>
          {chamados.length === 0 ? (
            <div className="container dashboard">
              <span>Nenhum chamado encontrado...</span>
              <Link to="/new" className="new">
                <FiPlus color="#FFF" size={25} />
                Novo chamado
              </Link>
            </div>
          ) : (
            <>
              <Link to="/new" className="new">
                <FiPlus color="#FFF" size={25} />
                Novo chamado
              </Link>

              <table>
                <thead>
                  <tr>
                    <th scope="col">Cliente</th>
                    <th scope="col">Assunto</th>
                    <th scope="col">Status</th>
                    <th scope="col">Cadastrando em</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                  {chamados.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="Cliente">{item.cliente}</td>
                        <td data-label="Assunto">{item.assunto}</td>
                        <td data-label="Status">
                          <span
                            className="badge"
                            style={{
                              // Fazer varificações para mudar a cor do badge para cada status: Aberto, Progresso, Atendido
                              // Para Aberto: #5cb85c
                              // Para Progresso: #f0ad4e
                              // Para Atendido: #5bc0de
                              backgroundColor:
                                item.status === "Aberto"
                                  ? "#5cb85c"
                                  : item.status === "Progresso"
                                  ? "#f0ad4e"
                                  : "#5bc0de",
                            }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td data-label="Cadastrado">{item.createdFormat}</td>
                        <td data-label="#">
                          <button
                            className="action"
                            style={{ backgroundColor: "#3583f6" }}
                            onClick={() => {
                              toogleModal(item);
                            }}
                          >
                            <FiSearch color="#FFF" size={17} />
                          </button>
                          <Link
                            to={`/new/${item.id}`}
                            className="action"
                            style={{ backgroundColor: "#f6a935" }}
                          >
                            <FiEdit2 color="#FFF" size={17} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {loadMore && (
                <h3 className="busca-mais">Buscando mais chamados...</h3>
              )}
              {!loadMore && !isEmpty && (
                <button className="btn-more" onClick={handleLoadMore}>
                  Buscar mais
                </button>
              )}
            </>
          )}
        </>
      </div>
      {showPostModal && (
        <Modal
          conteudo={detail}
          close={() => setShowPostModal(!showPostModal)}
        />
      )}
    </div>
  );
}
