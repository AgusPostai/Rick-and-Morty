import './App.css';
import CardDetail from './components/CardDetail';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Forms from './components/Form';
const EMAIL = 'agustin.postai@gmail.com';
const PASSWORD = 'agustin123';

function App() {
   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation()

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
 
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div>
        {pathname !== "/" &&  <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Forms login={login}/>} />
            <Route path="/home" element={<CardDetail characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
};

export default App;
