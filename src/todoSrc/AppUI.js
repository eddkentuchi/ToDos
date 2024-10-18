import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    serchTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
}){
    return(<>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
      searchValue= {searchValue}
      setSearchValue={setSearchValue}
      />

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

      <CreateTodoButton/>
    </>)
}

export {AppUI};