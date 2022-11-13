import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate = useNavigate();
    function logOut(){
        localStorage.setItem('data','') 
        localStorage.setItem('player','') 
        navigate('/login')
    }

    return(<>
     <ul style={{listStyle:"none" ,display:"flex", justifyContent:"flex-start" ,marginLeft:"37%"}}>
        <li style={{marginLeft:"20px"}}><Link to='/'>Home</Link></li>
        <li style={{marginLeft:"20px"}}><Link to='info'>Info</Link></li>
        <li style={{marginLeft:"20px"}}><Link to='todos'>Todos</Link></li>
        <li style={{marginLeft:"20px"}}><Link to='Post'>Post</Link></li>
        <li style={{marginLeft:"20px"}}><Link to='albums'>Albums</Link></li>
        <li onClick={logOut} style={{marginLeft:"20px", color: 'blue', textDecoration: 'underline'}}>Logout</li>
    
     
    
    
    </ul>
    <Outlet />
    </>
    )
   
}


export default Nav