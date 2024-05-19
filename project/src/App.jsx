import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoForm  from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Criar funcionalidade de completar tarefa", category: "Trabalho", isCompleted: false },
    { id: 2, text: "Criar funcionalidade de deletar tarefa", category: "Trabalho", isCompleted: false },
    { id: 3, text: "Estudar para a prova", category: "Pessoal", isCompleted: false },
    { id: 4, text: "Fazer compras", category: "Pessoal", isCompleted: false },
    { id: 5, text: "Estudar React", category: "Estudos", isCompleted: false },
    { id: 6, text: "Estudar Programação 2", category: "Estudos", isCompleted: false },
  ]);

  // Adicione um estado para controlar o valor do input de pesquisa.
  const [search, setSearch] = useState('');

  // Adicione um estado para controlar o valor do filtro. Por default, o filtro deve ser 'All'.
  const [filter, setFilter] = useState('All');

  // Adicione um estado para controlar a ordem das tarefas. Por default, a ordem deve ser 'Asc'.
  const [order, setOrder] = useState('Asc');

  // Adicione uma função para adicionar uma nova tarefa.
  const addTodo = (text, category) => { 
    const newTodo = [...todos, {
      id: todos.length + 1,
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodo);
  }

  // Remove a tarefa da lista de tarefas.
  const removeTodo = (id) => {
    // newTodo é uma cópia do estado atual de todos.
    const newTodo = [...todos];
    // Filtra a tarefa que tem o id igual ao id passado como argumento.
    const filteredTodo = newTodo.filter(todo => todo.id !== id);
    // Atualiza o estado de todos com a nova lista de tarefas.
    setTodos(filteredTodo);
  }

  // Completar a tarefa.
  const completeTodo = (id) => {
    // newTodo é uma cópia do estado atual de todos.
    const newTodo = [...todos];
    // Itera sobre a lista de tarefas.
    newTodo.forEach(todo => {
      // Se o id da tarefa for igual ao id passado como argumento, altera o valor da propriedade isCompleted.
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    // Atualiza o estado de todos com a nova lista de tarefas.
    setTodos(newTodo);
  }

  return (
    <div className="app">
      <h1>
        Lista de tarefas
      </h1>
      <Search search={search} setSearch={setSearch} />
      {/**  Adicione o componente Filter.*/}
      <Filter filter={filter} setFilter={setFilter} setOrder={setOrder} />
      <div className="todo-list">
        {/**  Adicione um loop para renderizar cada tarefa na lista de tarefas e realiza um filtro */ }   
        {todos
          // Filtra as tarefas de acordo com o filtro selecionado.
          .filter((todo) => {
            if (filter === 'All') {
              return true;
            } else if (filter === 'Completed') {
              return todo.isCompleted;
            } else {
              return !todo.isCompleted;
            }
          })
          .filter((todo) =>
            // Filtra as tarefas que contém o texto da pesquisa.
            // toLocaleLowerCase() é um método que retorna a string em minúsculo.
            // includes() é um método que verifica se a string contém a substring passada como argumento.
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          // Ordena as tarefas de acordo com a ordem selecionada. 
          // Realiza a comparação entre as strings de acordo com a ordem selecionada. No caso "a" e ""b" são os textos das tarefas.
          .sort((a, b) => {
            if (order === 'Asc') {
              // localeCompare() é um método que compara duas strings e retorna um número que indica se a string é maior, menor ou igual a outra string.
              return a.text.localeCompare(b.text);
            } else {
              return b.text.localeCompare(a.text);
            }
          })
          .map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}  />
        ))}
      </div>
      {/**  Adicione o componente TodoForm.*/}
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
