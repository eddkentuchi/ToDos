import { TodoContext } from '../TodoContext';
import React from 'react';
import './style.css'

function CreateTodoButton(){
    const {openModal,setOpenModal}=React.useContext(TodoContext);
    return(
    <button
    className= "CreateTodoButton"
    onClick={
        (event)=>{
            setOpenModal(!openModal);
            //en esta solucion solo se ocupa un parametro del TodoContext pudiendo borrar a openModal ya que llama al estado
            //setOpenModal(state => !state);
            console.log('le diste click')
            console.log(event)
            console.log(event.target)
        }
    }
    >+</button>
);
}

export{CreateTodoButton};