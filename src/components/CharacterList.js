import React from "react";
// import SearchForm from '../Components/SearchForm.js';
import styled from "styled-components";


const CharacterList = props => {
  const CharacterInfo = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly; 
  `;
  
  return (
    <section className="character-list">
      <CharacterInfo>
        {props.forms.map(form => (
          <div key={form.id}>
            <img src={form.image} alt=""/>
            <h2>{form.name}</h2>
          </div>
        ))}
      </CharacterInfo>
    </section>
  );
}

// export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

export default CharacterList;
