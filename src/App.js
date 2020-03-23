import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Axios from "axios";

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



  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
