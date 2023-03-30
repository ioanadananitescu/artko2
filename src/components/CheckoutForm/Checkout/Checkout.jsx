import React from 'react';
import { useState } from 'react';
import {Paper, Stepper, Step, StepLabel, Typography} from '@material-ui/core';
import useStyles from './style';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps=['Adresa livrare', 'Detalii de plata','Confirmare', 'Plata'];

const Checkout = () => {
   
  const [activeStep, setActiveStep]=useState(0);
  const classes=useStyles(); 
  
  const Confirmation=()=>(
    <div>
        Aceasta sectiune nu este activa. 
    </div>
  );

  const Form =() => activeStep == 0
  ? <AddressForm/>
  :<PaymentForm/>

  return(
   <>
   <div className={classes.toolbar}/>
   <main className={classes.layout}>
<Paper className= {classes.paper}>
      <Typography variant="h4" align="center">Plata</Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step)=>(
            <Step key={step}>
              <StepLabel>{step}</StepLabel>

            </Step>

          ))}

        </Stepper>
{activeStep ===steps.length ? <Confirmation/> : <Form/>}
    </Paper>
   </main>
   </>
  
)}

export default Checkout
