import React from "react";
import styled from 'styled-components';


export default function WelcomePage() {
  const ImgDiv = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    margin-top: 20px;
  `
  const Htag = styled.h1`
    margin-top: 40px;  
    text-align: center;
  `
  

  return (
    <section className="welcome-page">
      <header>
        <Htag>Welcome to the ultimate fan site!</Htag>
        <ImgDiv>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
            style={{borderRadius: '10px', padding: '5%'}}
          />
        </ImgDiv> 
      </header>
    </section>
  );
}
