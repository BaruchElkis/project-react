import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    console.log(users);
    
    const user = (e) => {
        e.preventDefault()
        let user;
        if (users) {
            

            user = users.find((user) => user.name === username && pass === user.address.geo.lat.slice(-4))
            if (user) {
              localStorage.setItem('data',JSON.stringify(user)) 
              localStorage.setItem('player',JSON.stringify(user.id)) 
                navigate('/')
            }else{
                alert("User not found!!")
            }
          
          
         
        
    }
}
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers([...data]))
    }, [])     

    return (<>
        
        <h1>Login</h1>
        <form onSubmit={user} >
            <input type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)} />
            <br></br>
            <input type="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)} />
            <br />
            <button type="submit">Login</button>
        </form>
    </>);
}
export default Login;