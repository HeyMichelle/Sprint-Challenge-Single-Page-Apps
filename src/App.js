import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm";

import styled from 'styled-components';



export default function App() {
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    Axios
      .get('http://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacterInfo(res.data.results)
        console.log(res.data.results);
      });
  }, []);

  useEffect(() => {

  }, [characterInfo]);

  const [searchState, setSearchState] = useState("");
  const handleInput = e => {
    setSearchState(e.target.value);
  }

  const filtered = characterInfo.filter(character => {
    return character.name.toLowerCase().includes(searchState.toLowerCase());
  })

  
  const Navbar = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  font-size: 15px;
  padding: 1%;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: inset 5px 5px 10px #d6d6d6, 
            inset -5px -5px 10px #ffffff;
  `
  

  return (
    <main data-testid='app'>
      <Header />
      <Navbar>
        <Link style={{textDecoration: 'none', color: 'Purple'}} to="/">Home</Link>
        <Link style={{textDecoration: 'none', color: 'Purple'}} to="/character-list">Character List</Link>
      </Navbar>
      <Route exact path="/" component={WelcomePage} />
      <SearchForm handleInput = {handleInput} />
      <Route path = "/character-list" component={CharacterList}><CharacterList forms={filtered} /></Route>
    </main>
  );
}