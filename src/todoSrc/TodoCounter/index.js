import { TodoContext } from '../TodoContext';
import React from 'react';
import './style.css'

function TodoCounter(){
    const {
        completedTodos,
        totalTodos  
    }=React.useContext(TodoContext);
    return(
        totalTodos > completedTodos ?
        <h1 >Has completado {completedTodos} de {totalTodos} TODOS</h1>
         :
         <h1 >Felicidades completaste todos los TODO</h1>
        );
}

export {TodoCounter};