import React from "react";
import "./index.scss";

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import HeroSection from './components/HeroSection/HeroSection'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <HeroSection/> } />
          <Route path="/shop" element={ <ItemListContainer/> } />
          <Route path="/productos/:categoryId" element={ <ItemListContainer/> } />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
