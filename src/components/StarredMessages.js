import React from 'react'
import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography, } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { UpdateSidebarType } from '../redux/slices/app'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { faker } from '@faker-js/faker'
import { SHARED_DOCS, SHARED_LINKS } from '../data'
import { DocMsg, LinkMsg } from './conversation/MsgType'
import Message from './conversation/Message'
const StarredMessages = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0);

 
    return (
        <Box sx={{ width: 320, height: '100vh' }}>
            <Stack sx={{
                height: '100%'
            }}>
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0 0 0 .25)",
                    width: '100%',
                    backgroundColor: theme.palette.mode === 'light' ? '#f8faff' : theme.palette.background
                }}>
                    <Stack direction={'row'}
                        alignItems={'center'}
                        // justifyContent={'space-between'}
                        spacing={3}
                        sx={{
                            height: '100%',
                            p: 2
                        }}>
                        <IconButton onClick={() => dispatch(UpdateSidebarType('CONTACT'))}>
                            <CaretLeft />
                        </IconButton>
                        <Typography>Starred Messages</Typography>
                    </Stack>
                </Box>
               
                <Stack sx={{ height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll' }} p={3} spacing={2} >
                   <Message/>
                </Stack>

                </Stack>
        </Box>

    )
}

export default StarredMessages