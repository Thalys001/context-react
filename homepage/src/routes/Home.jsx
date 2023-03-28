import React from "react";

import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";


const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>toggle theme</button>
      <p>theme is: {theme}</p>
    </div>
  )
};

export default Home;