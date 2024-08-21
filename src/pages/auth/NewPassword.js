import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'
import NewPasswordForm from '../../sections/auth/NewPasswordForm'

const NewPassword = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant='h3' paragraph>
                    Reset Password
                </Typography>
                <Typography sx={{color:'text.secondary',mb:5}}>
                    Please set your new password.
                </Typography>

                {/* new password form */}
                <NewPasswordForm/>
                <Link component={RouterLink} to='/auth/login' color='inherit' variant='subtitle2'
                sx={{mt:3,mx:'auto' ,alignItems:'center',display:'inline-flex'}}>
                    <CaretLeft/>
                    Return to signin
                </Link>
            </Stack>
        </>
    )
}

export default NewPassword