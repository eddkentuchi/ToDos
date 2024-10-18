import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
import { TodoContext } from './TodoContext';

function AppUI({}){
    return(<>
        <TodoCounter/>  
        {/*completed={completedTodos} total={totalTodos}/> */}
        <TodoSearch/>
        {/*searchValue= {searchValue}
        setSearchValue={setSearchValue}
        />*/}
        <TodoContext.Consumer>
            {({
                serchTodos,
                completeTodo,
                deleteTodo,
                loading,
                error
            })=>(
                <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && serchTodos.length ===0) && <EmptyTodos/>}
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
            )}
        </TodoContext.Consumer>
        <CreateTodoButton/>
    </>)
}

export {AppUI};