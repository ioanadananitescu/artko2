

import React, { useState, useLayoutEffect, useRef } from 'react';

import Carousel from 'react-material-ui-carousel';
import useStyles from './styles';
import {  Card, CardMedia, Button, CardActions, Box } from '@mui/material';


const Featured = ({ products }) => {
  
  const classes = useStyles();


  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null); 

  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  }, []) 
  console.log(height);
  console.log(width);
  console.log(ref.current);


  
if (!products) return <div>...loading</div>
  
  const featured = products.map(item => ({
      ...item,categories:item.categories.filter(item2 => item2.slug === 'firstpage')
  }))
  .filter(item => item.categories.length > 0);

  
  return (
        
        <main>

            {/* adding an empty div with the height equal to the 
      height of the toolbar so the products are pushed a little bit down */}

          <>
       <div style={{ position: 'relative' }} ref={ref}> 
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
            {featured.map((item) => (       
              <Card key={item.name}>
                <Box sx={{position:'relative'}}>
      <CardMedia  title={item.name} image={item.image.url}
                    style={{ height: 600, width: "100%", zIndex: "1" }} /> 
                  <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    direction: 'row',
                    justifyContent:'center',
                    bottom: 0,
                    width: '100%',
                 padding:'20px'
                    }}>
                        <Button variant="contained" color="primary" className={classes.btn}>Something</Button>
                                        </Box>
                  </Box>
      </Card> 
      ))}
          </Carousel>
                     </div>
                    </>
      
         </main>
    )
}
export default Featured