import React, { useState } from "react";
import {Field, Form, withFormik} from "formik";

const SearchForm = props => {
  return(
    <input onChange={props.handleInput} type="text" placeholder="Start *burrp* searching"/>
  );
}

export default SearchForm;
