import './ItemDetail.css'
import Button from '@mui/material/Button'

const ItemDetail = ({item}) => {
    return(
        <div className="container item-detail__container">
            <div>
                <img src={item.image} alt={item.title} />
            </div>
            <div>
                <h4>{item.title}</h4>
                <p>Category: {item.category}</p>
                <p>Brand: {item.brand}</p>
                <p>$ {item.price}</p>
                <p>{item.description}</p>
                <Button>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ItemDetail