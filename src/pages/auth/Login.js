import { Link, Stack, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import AuthSocial from '../../sections/auth/AuthSocial'
import LoginForm from '../../sections/auth/LoginForm'

const Login = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb:5,position:'relative'}}>
        <Typography variant='h4'>Login Now.</Typography>
        <Stack direction={'row'} spacing={.5}>
            <Typography variant='body2'>New User?</Typography>
            <Link to="/auth/register" component={RouterLink} variant='subtitle2'>
            Create an account
            </Link>
        </Stack>
        {/* login form */}
        
        <LoginForm/>
        {/* auth socials */}
        <AuthSocial/>
    </Stack>
    </>
  )
}

export default Login