import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './HeroSection.css'


function HeroSection() {
  
  return (
    <section className="container hero__container">
      <div>
        <h2>
          Bienvenidos al sitio de fútbol
        </h2>
        <h3>
          ¡Explora nuestro catálogo de productos y encuentra todo lo que necesitas para jugar al fútbol!
        </h3>
        <Button variant="contained">
          <Link to="/Shop">Ver productos</Link>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
