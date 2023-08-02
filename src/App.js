import './App.css';
import CardDetail from './components/CardDetail';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';


function App() {
   const [characters, setCharacters] = useState([]);

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
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/home" element={<CardDetail characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
};

export default App;
