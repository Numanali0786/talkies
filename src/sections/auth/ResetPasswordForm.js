import React, { useState } from 'react'
import * as Yup from 'yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Stack } from '@mui/material';
import RFHTextField from '../../components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';

const ResetPasswordForm = () => {

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is req!').email('invalid email'),
  });

  const defaultValues = {
    email: '',
  }

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema)
    , defaultValues
  });
  const { register, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = methods

  const onSubmit = async (data) => {
    try {
      // submit data

    } catch (error) {
      console.log(error)
      reset()
      setError("afterSubmit", {
        ...error,
        message: error.message
      })
    }
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert security='error'>{errors.afterSubmit.message}</Alert>}


        <RFHTextField name='email' label="Email Address" />
          
      <Button fullWidth color='inherit' size='large' type='submit' variant='contained'
        sx={{ bgcolor: "text.primary", color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'gray.800',
          '&:hover':{
            color:(theme)=>theme.palette.mode==='light'?'common.light':'grey.800'
          }
         }}>
        Send Request
      </Button>
      </Stack>
    
    </FormProvider>
  )
}

export default ResetPasswordForm