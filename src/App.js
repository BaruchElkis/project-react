import Login from './Login'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Info from './Info'
import Todos from './Todos'
import Post from './Post'
import Albums from './Albums'
import Album from './Album'


function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/' element={<Nav />}>
           <Route path='info' element={<Info />}/>
           <Route path="todos" element={<Todos/>}/>
           <Route path="post" element={<Post/>}/>
           <Route path="albums" element={<Albums/>}/>
           <Route path="albums/:albumId" element={<Album/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
