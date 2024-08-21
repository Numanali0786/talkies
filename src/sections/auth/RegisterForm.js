import React, { useState } from 'react'
import * as Yup from 'yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import RFHTextField from '../../components/hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { Eye, EyeSlash } from 'phosphor-react';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const LoginSchema = Yup.object().shape({
    firstName:Yup.string().required('First Name is req!'),
    lastName:Yup.string().required('Last Name is req!'),
    email: Yup.string().required('Email is req!').email('invalid email'),
    password: Yup.string().required('pass req!'),
  });

  const defaultValues = {
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  }

  const methods = useForm({
    resolver: yupResolver(LoginSchema)
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


<Stack direction={{xs:'column',sm:'row'}} spacing={2}>
<RFHTextField name='firstName' label="First Name"/>
<RFHTextField name='lastName' label="Last Name"/>
</Stack>

        <RFHTextField name='email' label="Email Address" />
        <RFHTextField name='password' label="Password" type={showPassword ? "text" : 'password'} InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => setShowPassword((p) => !p)}>
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          )
        }} />
      </Stack>
      <Stack alignItems={'flex-end'} sx={{ my: 2 }}>
        <Link variant='body2' color={'inherit'} underline='always'>
          Forgot Password?
        </Link>
      </Stack>
      <Button fullWidth color='inherit' size='large' type='submit' variant='contained'
        sx={{ bgcolor: "text.primary", color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'gray.800',
          '&:hover':{
            color:(theme)=>theme.palette.mode==='light'?'common.light':'grey.800'
          }
         }}>
        Create Account
      </Button>
    </FormProvider>
  )
}

export default RegisterForm