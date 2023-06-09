import React from 'react';
import { Featured, Product } from '../../components';
import { Grid } from '@mui/material';


const Home = ({ products, onAddToCart }) => {

 
  return (
    <>
      <Featured products={products} />
      <Grid container justifyContent="center" spacing={4}>
  {products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart} />
      
    </Grid>
  ))}
</Grid>
      </>
      
  )
}

export default Home

