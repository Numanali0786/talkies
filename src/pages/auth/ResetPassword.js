import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'

const ResetPassword = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant='h3' paragraph>
                    Forget Password
                </Typography>
                <Typography>
                    Enter email and reset your password.
                </Typography>

                {/* reset password form */}
                <ResetPasswordForm/>
                <Link component={RouterLink} to='/auth/login' color='inherit' variant='subtitle2'
                sx={{mt:3,mx:'auto' ,alignItems:'center',display:'inline-flex'}}>
                    <CaretLeft/>
                    Return to signin
                </Link>
            </Stack>
        </>
    )
}

export default ResetPassword