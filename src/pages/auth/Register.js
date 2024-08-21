import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import RegisterForm from '../../sections/auth/RegisterForm'
import AuthSocial from '../../sections/auth/AuthSocial'


const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant='h4'>Lets get started!</Typography>
        <Stack direction={'row'} spacing={.5}>
          <Typography variant='body2'>
            Already have an account?
          </Typography>
          <Link component={RouterLink} to="/auth/login" variant='subtitle2'>
            Signin
          </Link>
          </Stack>
          {/* Register */}
          <RegisterForm/>

          <Typography component={'div'} sx={{
            color: 'text.secondry', mt: 3, typography: 'caption', textAlign: 'center'
          }}>{'By SIgning up i agree to '}
            <Link underline='always' color='text.primary'>
              Terms of service</Link>
              {' and '}
            <Link underline='always' color='text.primary'>
              Policy Rules</Link>.
          </Typography>
          <AuthSocial/>


      </Stack >
    </>
  )
}

export default Register