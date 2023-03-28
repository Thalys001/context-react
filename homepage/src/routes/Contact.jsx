import React from "react";

import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div>
      <h1>Contact Page</h1>
      <p>theme is : {theme}</p>
    </div>
  )
};

export default Contact;