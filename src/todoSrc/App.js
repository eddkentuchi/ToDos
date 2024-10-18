import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  TodoProvider
  //console.log('Los usuarios buscan de: '+searchValue);
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>    
  );
}
export default App;
