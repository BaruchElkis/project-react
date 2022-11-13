import React from 'react';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom'
let user = JSON.parse(localStorage.getItem('data'))
export default function Todos() {
    const [todos, setTodos] = useState([]);
 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
            .then(res => res.json())
            .then(data => setTodos(data))
           
    }, [])   
   console.log(todos);
    return(

        <>
    
        <h1>Todos</h1>
    <p>Name: {user.name}</p>
    {todos.sort(
        (a,b)=>a.title.localeCompare(b.title)).map(
            (todos)=><Link to ={`${todos.id}`} ><p>{todos.title}</p></Link>)}

    
    
    
        </>
        )
}


 











