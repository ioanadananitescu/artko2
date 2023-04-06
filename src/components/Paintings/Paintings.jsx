import React, {useState, useEffect, Fragment} from 'react';
import {  Grid, Drawer, Box, IconButton, Toolbar, List, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import TuneIcon  from '@mui/icons-material/Tune';
import { Product } from '../../components';
import useStyles from './style';
import { select } from '../Data';
import clsx from 'clsx';
import { useMediaQuery, useTheme } from '@mui/material';

const drawerWidth = 240;
const drawerSpace = 16;



  const DesktopNav = () => {
    const [open, setOpen] = useState();
        return (
                         
      <Drawer variant="permanent" anchor="left" onClick={()=>setOpen(null)} sx={{mt:drawerSpace, display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }} >

 <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
 <Divider />
<List sx={{ml:5}} >
                    {select.map((text,i) => (
                <div key={text.id}>
                            <Toolbar>{text.name}</Toolbar>
                            
                        {select[i].child.map((item) => (
                                <FormGroup key={item.id}>
                                    <FormControlLabel control={<Checkbox />} label={item.name}></FormControlLabel>
                                </FormGroup>
                            ))
                            }
                        </div>
                        ))
                        
                    }
            
                </List>
          </Drawer>
    )
    
  }

  const MobileNav = () => {
    const [openDra, setOpenDra] = useState();
    
    return (
      <Box>
        <Toolbar sx={{mt:15}}>
        <IconButton //hide on desktop
      color="inherit"
      onClick={()=>setOpenDra(!openDra)}
      edge="start"
    >
      <TuneIcon />
          </IconButton>
          </Toolbar>
       <Drawer variant="temporary"
          open={openDra}
          onOpen={() => setOpenDra(true)}
          onClose={() => setOpenDra(false)}
          sx={{ display: { xs: 'block', sm: 'none' } }}>
 
      <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
      <Divider />   
          <List sx={{ ml: 5 }}>
  {select.map((text,i) => (
  <div key={text.id}>
  <Toolbar>{text.name}</Toolbar>                            
  {select[i].child.map((item) => (
  <FormGroup key={item.id}>
  <FormControlLabel control={<Checkbox />} label={item.name}></FormControlLabel>
  </FormGroup>
   ))
  }
 </div>
  ))
 }
 </List> 
       
         
       </Drawer>
  
        </Box>
    )
    
  }
 
const Paintings = ({ products, onAddToCart }) => {
  const classes = useStyles();
  
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

   
  console.log(select);
  console.log(select[0].child);
      
    return (
    <>
        <Box sx={{ display: 'flex' }}>
      {isMobile ? <MobileNav />:<DesktopNav/>}
    </Box>    
 
      <Box
        component="main"
       /*    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} */
          className={classes.content}
      >
              <Toolbar />
              <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
  {products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart} />
      
    </Grid>
  ))}
</Grid>
        </Box>
        </>
    
  )
}

export default Paintings