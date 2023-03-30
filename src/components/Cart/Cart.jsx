import React from 'react';
import {Grid, Container, Button, Typography} from '@material-ui/core';
import { CartItem, Navbar } from '../../components';
import {Link} from 'react-router-dom';
import useStyles from './styles';



const Cart = ({cart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart}) => {

    
    const classes=useStyles();
    
    const EmptyCart=()=>(
        <>
        <Navbar/>
        <Typography variant="subtitle1">You have no items in the cart! </Typography>
        <Typography variant="body1"  component={Link} to={"/"}>Add</Typography>
        </>
        
    );
    const FilledCart=()=>(
        <>
        <Grid container justifyContent="center" spacing={4}>
        {cart.line_items.map((item)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
               
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />

            </Grid>
        ))}
        </Grid>
        <div className={classes.CartDetails}>
            <Typography variant="body1">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                <Button component={Link} to={"/checkout"} className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                
            </div>
        </div>
        </>
    )
    if (cart.line_items)
  
  return (
    <Container>
        <div className={classes.toolbar}/>

        <Typography className={classes.title} variant="h6">Your Shopping cart</Typography>
        {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
 
  )
}

export default Cart