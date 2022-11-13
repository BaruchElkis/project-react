// import { Link } from 'react-router-dom'
// import Nav from './Nav'
export default function Info(){

    return(

    <>

    <h1>Info</h1>
<p>Name: {JSON.parse(localStorage.getItem('data')).name}</p>
<p>Email: {JSON.parse(localStorage.getItem('data')).email}</p>
<p>Phone: {JSON.parse(localStorage.getItem('data')).phone}</p>
<p>City: {JSON.parse(localStorage.getItem('data')).address.city}</p>
<p>Company: {JSON.parse(localStorage.getItem('data')).company.name}</p>



    </>
    )
   
}


 