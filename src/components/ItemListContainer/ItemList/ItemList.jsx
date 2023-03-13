import React from 'react';
import Item from '../Item/Item'
import './ItemList.css'

import Carousel from 'react-material-ui-carousel'

const ItemList = ({productos}) => {
    return (
        <>    
            <div>
                { productos.map( (prod) => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </div>
        </>
      );
}

export default ItemList