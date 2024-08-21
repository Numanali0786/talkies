import React from 'react'
import { faker } from '@faker-js/faker'
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import { useTheme } from '@emotion/react'
import StyledBadge from '../settings/StyledBadge'
import { useDispatch } from 'react-redux'
import { ToggleSidebar } from '../../redux/slices/app'

const Header = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    return (
        <Box p={2} sx={{
            // height: '100px',
            width: '100%', backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
            boxShadow: "0px  0px 2px rgba(0,0,0,.25)"
        }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%', height: "100%" }}>
                <Stack direction={'row'} spacing={2} onClick={() => dispatch(ToggleSidebar())}>
                    <Box>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
                        </StyledBadge>
                    </Box>
                    <Stack spacing={.2}>
                        <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                        <Typography variant='caption'>Online</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} spacing={3} sx={{}}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Header