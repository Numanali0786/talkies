import React, { useState } from 'react'
import * as Yup from 'yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import RFHTextField from '../../components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
const NewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(6,'password must be 6 size').required('pass req!'),
    confirmPassword: Yup.string().required('pass req!').oneOf([Yup.ref('newPassword'),null],'Password must match'),
  });

  const defaultValues = {
    email: '',
    newPassword: '',
    confirmPassword: ''
  }

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema)
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


        <RFHTextField name='newPassword' label="Password" type={showPassword ? "text" : 'password'} InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => setShowPassword((p) => !p)}>
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          )
        }} />
        <RFHTextField name='confirmPassword' label="Confirm Password" type={showPassword ? "text" : 'password'} InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => setShowPassword((p) => !p)}>
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          )
        }} />
      
      <Button fullWidth color='inherit' size='large' type='submit' variant='contained'
        sx={{ bgcolor: "text.primary", color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'gray.800',
          '&:hover':{
            color:(theme)=>theme.palette.mode==='light'?'common.light':'grey.800'
          }
         }}>
        Submit
      </Button>
      </Stack>
    </FormProvider>
  )
}

export default NewPasswordForm