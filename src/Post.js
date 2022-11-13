import React from 'react';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom'
let user = JSON.parse(localStorage.getItem('data'))
export default function Posts() {
    const [posts, setPosts] = useState([]);
   
  

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
           
    }, [])   
   console.log(posts);
    return(

        <>
    
        <h1>Posts</h1>
    <p>Name: {user.name}</p>
    {posts.sort(
        (a,b)=>a.title.localeCompare(b.title)).map(
            (posts)=><Link to ={`${posts.id}`} ><p>{posts.title}</p></Link>)}

    
    
    
        </>
        )
}










