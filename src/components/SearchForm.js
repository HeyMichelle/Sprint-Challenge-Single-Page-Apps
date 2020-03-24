import React from "react";
// import {Field, Form, withFormik} from "formik";
import styled from 'styled-components';

const SearchForm = props => {
  const SearchDiv = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    font-size: 15px;
    margin-top: 20px;
  `

  return(
    <SearchDiv>
      <input onChange={props.handleInput} type="text" placeholder="Start *burrp* searching"/>
      {/* should place in button here? */}
    </SearchDiv>
  );
}

export default SearchForm;
