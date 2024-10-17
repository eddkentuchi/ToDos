import React from 'react';

function TodoSearch({searchValue,setSearchValue}){


  return(
    <input 
    placeholder="Has completado n de n TODOS"
    className="TodoSearch"
    value={searchValue}
    onChange={
        (event)=>{
            //console.log('modificaste el input')
            setSearchValue(event.target.value)
            // console.log(event)
            //console.log(event.target)
        }}
    />
  );
}

export {TodoSearch};