import { TodoContext } from '../TodoContext';
import React from 'react';
import './style.css'

function TodoForm(){
    const {setOpenModal,addTodo}=React.useContext(TodoContext);
    const[newTodoValue,setNewTodoValue]=React.useState('');
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    return(
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
            pleceholder="Cortar cebolla para algo"
            value={newTodoValue}
            onChange={onChange}
        />
        <div className='TodoForm-buttonContaniner'>
            <button
                type='button'
                className= "TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button
                type='submit'
                className= "TodoForm-button TodoForm-button--add"
                onClick={onSubmit}
            >Agregar</button>
        </div>
    </form>
);
}
export {TodoForm};