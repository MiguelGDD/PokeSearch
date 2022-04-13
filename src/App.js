import React from 'react';
import './App.css';
import Buscar from './components/Buscar';
import Pokemon from './components/Pokemon';
import Footer from './components/Footer';
import Fondo from './components/Fondo';
import styled from 'styled-components';
import { getPokemons, getPokemonsData, SearchPokemon } from './api';
const {useState, useEffect} = React;

export default function App() {

  const [infoPokemon, setInfoPokemon] = useState([]);

  const fetchInfoPokemon= async()=>{
    try {
      const data= await getPokemons();
      const Promises = data.results.map(async (poke) =>{
        return await getPokemonsData(poke.url)
      })
      const results = await Promise.all(Promises);
      setInfoPokemon(results);
    } catch (error) {
    }
  };

  const onSearch = async(pokemon) =>{
  
    const results = await SearchPokemon(pokemon);
    if(!results){
    }else{
      setInfoPokemon([results]);
    }
    
   
  };


  useEffect(()=>{
    fetchInfoPokemon();
  }, [])

  const MyTarjeta = styled.div`
        display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  position: relative;
  margin-top: 3%;
  z-index: 10;
  width: 50%;
  left: 25%;
    overflow: hidden;
    color: #414141;
    background-color: #FFFFFF;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    @media (max-width: 1057px){
      min-height: 90vh;
      width: 75%;
      margin-top: 2%;
      left: 15%;
    }
    @media (max-width: 930px){
      min-height: 90vh;
      width: 70%;
      margin-top: 2%;
      left: 15%;
      
    }
    @media (max-width: 850px){
      width: 90%;
      left: 4%;
    }

     `;

    const Myh1 = styled.h1`
    position: absolute;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display:grid;
    left: 50%;
    top: 1%;
    font-size: 30px;
    transform: translate(-50%, -50%);
    font-family: 'Poppins';

    `;

  return (
    <div>
      <MyTarjeta >
      <Myh1>PokeSearch</Myh1>
      <Buscar onSearch={onSearch}/>
      <Pokemon infoPokemon={infoPokemon} />
    </MyTarjeta>
    <Footer/>
    <Fondo/>
    </div>
    
  );
}