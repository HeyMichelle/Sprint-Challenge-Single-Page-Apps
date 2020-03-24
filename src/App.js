import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Axios from "axios";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import styled from 'styled-components';
import SearchForm from "./components/SearchForm";
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';



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
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  `

  return (
    <main data-testid='app'>
      <Header />
      <Navbar>
        <Link style={{textDecoration: 'none', color: 'Purple'}} to="/">Home</Link>
        <Link style={{textDecoration: 'none', color: 'Purple'}} to="/character-list">Character List</Link>
      </Navbar>
      <SearchForm handleInput = {handleInput} />
      <Route exact path="/" component={WelcomePage} />
      <Route path = "/character-list" component={CharacterList}><CharacterList forms={filtered} /></Route>
    </main>
  );
}