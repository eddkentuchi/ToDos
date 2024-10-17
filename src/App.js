import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import React from 'react';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];
//localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos =[];
  }else{
    parsedTodos=JSON.parse(localStorageTodos);
  }
  const[todos,setTodos]= React.useState(parsedTodos);
  const[searchValue,setSearchValue]=React.useState('');
  const completedTodos= todos.filter(todo=>!!todo.completed).length;
  const serchTodos= todos.filter((todo)=>{
    const searchText= searchValue.toLocaleLowerCase();
    const todoText= todo.text.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };
  const totalTodos=todos.length;
  console.log('Los usuarios buscan de: '+searchValue);
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
      searchValue= {searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
      {serchTodos.map(todo =>(
        <TodoItem 
          key={todo.text} 
          name={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDeleted={()=>deleteTodo(todo.text)}
          
        />
      ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}



export default App;
