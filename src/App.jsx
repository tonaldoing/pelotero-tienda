import React from "react";
import "./index.css";

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer title="Recomendados"/>
    </>
  );
};

export default App;
