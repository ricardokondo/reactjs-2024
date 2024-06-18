import "./modal.css";
import { FiX } from "react-icons/fi";

/* Nesta função são passados os valores que serão utilizados no modal, como 
o conteúdo e a função close que fecha o modal */
function Modal({ }) {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={close}>
          <FiX size={25} color="#fff" />
          Voltar
        </button>

        <main>
          <h2>Detalhes do Chamando</h2>

          <div className="row">
            <span>
              Cliente:
              <i>Nome do Cliente</i>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto:
              <i>Descreva aqui o seu assunto</i>
            </span>
            <span>
              Cadastrado em:
              <i>Data de cadastrp</i>
            </span>
          </div>

          <div className="row">
            <span>
              Status:
              <i
                className="status-badge"
                style={{
                  backgroundColor:
                    conteudo.status === "Aberto"
                      ? "#5cb85c"
                      : conteudo.status === "Progresso"
                      ? "#f0ad4e"
                      : "#5bc0de",
                }}
              >
                Status
              </i>
            </span>
          </div>
        
            <div className="row">
              <span>
                Complemento:
                <i>Neste campo é descrito o complemento</i>
              </span>
            </div>
          
        </main>
      </div>
    </div>
  );
}

export default Modal;
