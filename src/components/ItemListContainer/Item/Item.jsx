import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="350"
                    image={prod.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Price: {prod.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Category: {prod.category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/detail/${prod.id}`}>View More</Link>
                </CardActions>
            </Card>
        </>
      );
}

export default Item