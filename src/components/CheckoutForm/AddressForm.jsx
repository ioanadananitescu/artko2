import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './FormInput';

const AddressForm = () => {
    const methods= useForm();

  return (
  
  <>
  <Typography variant="h6" gutterBottom color="textSecondary">Adresa de livrare</Typography>
  <FormProvider {...methods}>
    <form onSubmit=''>
        <Grid container spacing={3}>
            <FormInput required name='numeFamilie' label='Nume'/>
            <FormInput required name='prenume' label='Prenume'/>
            <FormInput required name='adresa' label='Adresa'/>
            <FormInput required name='email' label='Email'/>
            <FormInput required name='oras' label='Oras'/>
            <FormInput required name='codPostal' label='Cod Postal'/>
            
   </Grid>
    </form>
  </FormProvider>
  </>
  )
}
export default AddressForm;