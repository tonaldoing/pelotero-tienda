import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from './ItemList/ItemList'
import './ItemListContainer.css' 
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

  console.log(categoryId)

  useEffect(() => {
    setLoading(true)
    pedirDatos()
    .then((res) => {
      if (!categoryId) {
        setProductos(res)
      } else {
        setProductos( res.filter((prod) => prod.category === categoryId) )
      }
      
    })
    .catch((error) =>{
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  },[categoryId])

  return (
    <>
        
        <div className="container item-list__container">
          {
            loading
              ? <div className="container"> <div className="lds-ripple"><div></div><div></div></div> </div>
              : 
              <ItemList productos={productos}/>
          }
        </div>
    </>
  );
}
