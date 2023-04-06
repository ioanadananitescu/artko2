import React, {useState, useEffect} from 'react';

import {Navbar, Products, Cart, Checkout, Details, Featured, Home, Paintings} from './components';
import './App.css';
import {commerce} from '../src/lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductAttributes from './components/ProductAttributes';
import Upload from './components/Upload/Upload';


const App = () => {

  
    const [products, setProducts]=useState([]);
    const [cart, setCart] = useState({});
    // const [featured, setFeatured] = useState([]);
  
   

    const fetchProducts = async ()=>{
        const { data } = await commerce.products.list();
        setProducts(data);
    }



    
   

    const fetchCart = async ()=>{
        
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart= async (productId, quantity)=>{
       
        const item= await commerce.cart.add(productId, quantity);
       setCart(item);
    }
   
    const handleUpdateCartQty =async (productId, quantity) => {
        
        const item = await commerce.cart.update(productId, { quantity })
        
        setCart(item)
        
      
      }

        const handleRemoveFromCart = async (lineItemId) => {
            const item=await commerce.cart.remove(lineItemId);
            setCart(item);
        }

        const handleEmptyCart=async()=>{
            const item=await commerce.cart.empty();
            setCart(item);
        }
     
    

    useEffect(()=>{
        fetchProducts();
        fetchCart();
       
       
    },[])
  
    console.log(products);
    
  
  
  return (
    <Router>
    <div className="App">
        <div>
           
   <Navbar totalItems={cart.total_items}/>
     
         <Routes>
                      <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/> }>
           
                      </Route>
            <Route exact path="/home" element={<Home products={products} onAddToCart={handleAddToCart} />}>
                          
                      </Route>
                      <Route exact path="/featured" element={<Featured products={products}/>}>
                          
                      </Route>
                 

            <Route exact path="/details/:id" element={<Details/>}></Route>
           
           <Route exact path="/cart" element = {<Cart cart={cart} 
           handleUpdateCartQty={handleUpdateCartQty} 
           handleRemoveFromCart={handleRemoveFromCart} 
           handleEmptyCart={handleEmptyCart} /> } >
             </Route>
                      <Route exact path="/checkout" element={<Checkout />}></Route>
                      <Route exact path="/attributes" element={<ProductAttributes />}></Route>
            <Route exact path='/paintings' element={<Paintings products={products} onAddToCart={handleAddToCart} />}></Route>
            <Route exact path='/uploadImage' element ={<Upload />}></Route>
          </Routes>
          
          
        </div>
   

    </div>
    </Router>
   
  )
}


export default App