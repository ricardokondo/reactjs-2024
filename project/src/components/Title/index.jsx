import "./title.css";

/* Função para titulo da página passando o nome da página como parâmetro 
*/
export default function Title({ children, name }) {
  return (
    <div className="title">
      {children}
      <span>{name}</span>
    </div>
  );
}
