import React from 'react';
import { Featured, Products } from '../../components';


const Home = ({ products }) => {

 
  return (
    <>
      <Featured products={products} />
      <Products products={products}/>
      </>
      
  )
}

export default Home

