import React, {useState} from 'react';
import { Grid, Drawer, Box, CssBaseline, AppBar, Toolbar, List, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Product } from '../../components';
import useStyles from './style';
import { select } from '../Data';





const Paintings = ({ products, onAddToCart }) => {
    const classes = useStyles();
    const drawerWidth = 240;
    const drawerSpace = 15;
    const [state, setState] = useState({});
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
   
    console.log(select);
    console.log( select[0].child);
    return (
      
 <Box sx={{ display: 'flex' }}  >
                       
 <Drawer
                sx={{
                    width: drawerWidth, flexShrink:0, mt:drawerSpace,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box', 
                        mt:drawerSpace, 
                       
                    }
                }} variant="permanent"  anchor="left">
 <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
 <Divider />
<List sx={{ml:5}}>
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
          
 









      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
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
    </Box>
  )
}

export default Paintings