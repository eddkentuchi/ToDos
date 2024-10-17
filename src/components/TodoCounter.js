import '../styles/TodosStyles.css'

function TodoCounter({total,completed})
{
    return(
        total=completed ?
        <h1 >Has completado {completed} de {total} TODOS</h1>
        :
        <h1 >Felicidades completaste todos los TODO</h1>);
}

export {TodoCounter};