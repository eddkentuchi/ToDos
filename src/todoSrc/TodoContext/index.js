import { useLocalStorage } from '../localStorage';
import React from "react";
const TodoContext = React.createContext();

function TodoProvider({children}){
    
    const{
        item:todos,
        saveItem: saveTodos,
        loading,
        error
    }= useLocalStorage('TODOS_V1',[]);
    const[searchValue,setSearchValue]=React.useState('');
    const[openModal,setOpenModal]=React.useState(false);
    const completedTodos= todos.filter(todo=>!!todo.completed).length;
    const totalTodos=todos.length;
    
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
    const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed:false,
        });
        saveTodos(newTodos)
    }
    const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    };
    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            serchTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
            }}>
            {children}
        </TodoContext.Provider>
//<TodoContext.Consumer></TodoContext.Consumer>
    );
}


export {TodoContext,TodoProvider};