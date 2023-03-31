import React from 'react';
import {Grid} from '@material-ui/core';
import {Product} from '../../components';
import useStyles from './styles';



const Products = ({products, onAddToCart}) => {
  const classes=useStyles();
  return(
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      

      {/* adding an empty div with the height equal to the 
            height of the toolbar so the products are pushed a little bit down */}
     
<Grid container justifyContent="center" spacing={4}>
  {products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart} />
      
    </Grid>
  ))}
</Grid>

  
  </main>
  )
}

export default Products