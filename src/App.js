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
function useLocalStorage(itemName,initialValue){
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem =initialValue;
  }else{
    parsedItem=JSON.parse(localStorageItem);
  }
  const [item,setItem ]=React.useState(parsedItem);
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item,saveItem];
}
function App() {
  
  const[todos,saveTodos]= useLocalStorage('TODOS_V1',[]);
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
