import React from "react";
import { useState } from 'react'
import Button from '@mui/material/Button';
import './ItemCount.css';

export default function ItemCount() {

  const [count, setCount] = useState(1)
  const [stock, setStock] = useState(10)
  
  const removeCount = () => {
    if(count > 1){
      setCount( prev => prev - 1 )
    }
  }

  const addCount = () => {
    if(count < stock ){
      setCount( prev => prev + 1 )
    }
  }

  const addProd = () => {
    if(count <= stock ){
      setStock ( stock - count )
      console.log(stock)
    }
    else {
      alert('OUT OF STOCK')
    }
  }

  return (
    <>
      <div className="item-count-container"> 
        <div className="item-count">
          <Button onClick={removeCount}>-</Button>
            <h2>{count}</h2>
          <Button onClick={addCount}>+</Button>
        </div>
        <div className="item-actions">
            <Button onClick={addProd}>Agregar al carrito</Button>
            <small> Stock disponible {stock} </small>
        </div>
      </div>
    </>
  );

  }