import { useLocalStorage } from './localStorage';
import {AppUI } from './AppUI';
import React from 'react';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];
//localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));

function App() {
  
  const{
    item:todos,
    saveItem: saveTodos,
    loading,
    error
  }= useLocalStorage('TODOS_V1',[]);
  const[searchValue,setSearchValue]=React.useState('');
  const completedTodos= todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;
  console.log('Log 1');
  React.useEffect(()=>  {console.log('Loooooooog 2')},[totalTodos]);
  console.log('Log 3');
  
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
    saveTodos(newTodos);
  };
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };
  //console.log('Los usuarios buscan de: '+searchValue);
  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    serchTodos={serchTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    loading={loading}
    error={error}
    />);
}
export default App;
