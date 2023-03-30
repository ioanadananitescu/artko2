import React, {useState} from 'react';
import {AppBar, Toolbar,  Badge, MenuItem, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Menu, Box, Button, Container } from '@mui/material';
import { pages } from '../Data';


import useStyles from './styles.js';





const Navbar = ({totalItems}) => {

  const classes=useStyles();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState(null);
  

  const openMenuTooltip = (event) => {
    setMenuItems(event.currentTarget);
  };


  const closeMenuTooltip = () => {
    setMenuItems(null);
  };




  function Emptycart({ totalItems }) {
    if (!{ totalItems }) {
    return <ShoppingCart/>
    }
    return (
    <IconButton component={Link} to='/cart' aria-label="Show items in the cart" color="primary">
    <Badge overlap="rectangular"  badgeContent={totalItems} color="secondary">
      <ShoppingCart/>
    </Badge>
      </IconButton>
    )
   }


  console.log(pages);
  return (
    <>
 <AppBar position="fixed" className={classes.appBar} color="inherit" >
        <Container maxWidth="xl" />
        {/*toolbar that will host the logo and title of the page*/}
        <Toolbar sx={{position:'absolute', margin:'auto'}}>
        <Typography component={Link} to="/" variant="h6" className={classes.title} >
 <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
 ARTKO. Art Agency
              </Typography>
                 </Toolbar>
{/*Toolbar that will host the menu items, with responsiveness and the cart, search field and user logged*/}
        <Toolbar disableGutters>
          {/*menu for mobile and tablet*/}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit" onClick={openMenuTooltip}>
  <MenuIcon />
            </IconButton>       
<Menu anchorEl={menuItems}
anchorOrigin={{
  vertical: 'bottom',
  horizontal: 'left',
}}
  keepMounted
  transformOrigin={{
  vertical: 'top',
  horizontal: 'left',
}}
  open={Boolean(menuItems)}
  onClose={closeMenuTooltip} 
sx={{
  display: { xs: 'block', md: 'none' },
              }} > 
              {pages.map((e) => (
                <MenuItem key={e.id}>
                  <Typography variant='body1' component={Link} to={e.path} color="inherit">{e.name}</Typography>
                </MenuItem>
              ))}   
   </Menu> 
    <div className={classes.grow}/>
    {location.pathname !=='/cart' &&(
    <div className={classes.button}>
      <Emptycart totalItems={totalItems}/>
              </div>)
                        }
          </Box>

          {/* menu for laptops*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 
            {pages.map((e) => (
                             <Link key={e.id} to={e.path}>
              <Button variant='text' onClick={closeMenuTooltip}
                    sx={{ color: "inherit", display: "block" }} >{e.name}</Button>
                  </Link>
          
            ))}
            <div className={classes.grow}/>

    {location.pathname !=='/cart' &&(
    <div className={classes.button}>
      <Emptycart totalItems={totalItems}/>
    </div>)}
           </Box>
        </Toolbar>
        </AppBar>
</>
  )
}

export default Navbar