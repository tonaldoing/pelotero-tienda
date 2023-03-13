import React, {useEffect, useState} from 'react';
import { pedirDatosId } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer (){

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()
  console.log(itemId)
  console.log(item)

  useEffect(() => {
    setLoading(true)

    pedirDatosId(Number(itemId))
    .then((res) => {
      setItem(res)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [itemId])

    return (
        <div className='container'>
          {
            loading
              ? <div className="lds-ripple"><div></div><div></div></div>
              : <ItemDetail item={item}/>
          }
        </div>
      );
}