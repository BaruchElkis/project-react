import React from 'react';
import { useState, useEffect} from "react";
import { Link, useParams} from 'react-router-dom'

let user = JSON.parse(localStorage.getItem('data'))

function Album() {
    const {albumId} = useParams()
    console.log(albumId);
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(res => res.json())
            .then(data => setAlbum(data))
           
    }, [])   
    console.log(album);
    return ( album.map((album)=><img src={album.thumbnailUrl}/>));
}

export default Album;