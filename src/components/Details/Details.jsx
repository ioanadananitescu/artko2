import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';

import { commerce } from '../../lib/commerce';




const Details = (product, onAddToCart) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body1" gutterBottom>
            {product.name}
          </Typography>
            <Typography variant="body1">
            {product.price.formatted_with_code}
          </Typography>
        </div>
          <Typography variant="body2" color="textSecondary">
          {product.description}
          </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} >
        <IconButton aria-label="Add to Cart" onClick={() => (onAddToCart(product.id,1))}><AddShoppingCart/></IconButton>
      </CardActions>
    </Card>
      
    
  )
}

export default Details