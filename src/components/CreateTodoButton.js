function CreateTodoButton(){
    return(
    <button
    className= "CreateTodoButton"
    onClick={
        (event)=>{
            console.log('le diste click')
            console.log(event)
            console.log(event.target)
        }
    }
    >Agregar</button>
);
}

export{CreateTodoButton};