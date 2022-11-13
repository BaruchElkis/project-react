import React from 'react';
import { useState, useEffect} from "react";
import { Link} from 'react-router-dom'
let user = JSON.parse(localStorage.getItem('data'))
export default function Albums() {
    const [albums, setAlbums] = useState([]);
   
    // const [user, setUser] = useState([]);
   
    //  setUser(user)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data)) 
           
    }, [])   
   console.log(albums);
    return(

        <>
    
        <h1>Albums</h1>
    <p>Name: {user.name}</p>
    {albums.sort(
        (a,b)=>a.title.localeCompare(b.title)).map(
            (album)=><Link to ={`${album.id}`} ><p>{album.title}</p></Link>)}

    
    
    
        </>
        )
}










