import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/search'
import { MagnifyingGlass } from 'phosphor-react'

const Group = () => {
  return (
    <>
        <Stack direction={'row'} sx={{width:'100%'}}>
            {/* left */}
            <Box sx={{height:'100vh',
                backgroundColor:(theme)=>theme.palette.mode==='light'?'#f8faff':theme.palette.background,
                width:320,boxShadow:'0px 0px 2px rgba(0,0,0,.25)'
            }}>
                <Stack  spacing={2} sx={{height:'100vh'}}>
                    <Stack >
                        <Typography variant='h4'>Groups</Typography>

                    </Stack>
                    <Stack sx={{width:'100%'}}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709ce6' />

                        </SearchIconWrapper>
                        <StyledInputBase placeholder='Search..' />
                    </Search>
                    </Stack>
                </Stack>
            </Box>
            {/* right */}
            <Box>

            </Box>

        </Stack>
    </>
  )
}

export default Group