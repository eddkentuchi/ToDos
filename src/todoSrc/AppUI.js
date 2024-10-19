import { CreateTodoButton } from './CreateTodoButton';
import { TodosLoading } from './TodosLoading';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { Modal } from './Modal';
import React from 'react';

function AppUI(){
    const{loading,error,serchTodos,searchValue,completeTodo,deleteTodo,openModal,} =React.useContext(TodoContext);
    return(<>
        <TodoCounter/>  
        {/*completed={completedTodos} total={totalTodos}/> */}
        <TodoSearch/>
        {/*searchValue= {searchValue}
        setSearchValue={setSearchValue}
        />*/}
        
        <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && serchTodos.length ===0 && searchValue==='') && <EmptyTodos/>}
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
        {openModal &&(
            <Modal>
                <TodoForm/>
            </Modal>
        )}
    </>)
}

export {AppUI};