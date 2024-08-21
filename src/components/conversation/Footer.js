import React, { useState } from 'react'
import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material'
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from 'phosphor-react'
import { styled, useTheme } from '@mui/material/styles'


import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'



const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact",
    },
];


const StyledInput = styled(TextField)(({ theme }) => ({

    '& .MuiInputBase-input': {
        paddingTop: '12px',
        paddBottom: '12px'
    }

}))

const ChatInput = () => {
    const theme = useTheme()
    const [showEmojiPicker, setShowImojiPicker] = useState(false)
    const [openActions, setOpenActions] = useState(false)
    return <Stack width={'100%'}>
        <Stack sx={{ zIndex: 10, position: "fixed", bottom: 81, right: 100, display: showEmojiPicker ? "inline" : "none" }}>
            <Picker theme={theme} data={data} onEmojiSelect={console.log} />
        </Stack>
        <StyledInput fullWidth placeholder='Write a message...' variant='filled' InputProps={{
            disableUnderline: true,
            startAdornment:
                (<Stack sx={{ width: 'max-content'}}>
                    <Stack sx={{ position: 'relative', display: openActions ? 'inline-block' : 'none' ,backgroundColor:'red' }}>
                        {Actions.map((el) => {
                            return <Tooltip placement='right' title={el.title}>
                                <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                                    {el.icon}
                                </Fab>
                            </Tooltip>
                        })}
                    </Stack>

                    <InputAdornment>
                        <IconButton>
                            <LinkSimple onClick={() => setOpenActions((p) => !p)} />
                        </IconButton>
                    </InputAdornment>
                </Stack>),
            endAdornment: <InputAdornment>
                <IconButton>
                    <Smiley onClick={() => setShowImojiPicker((p) => !p)} />
                </IconButton>
            </InputAdornment>,
        }} />
    </Stack>
}

const Footer = () => {
    const theme = useTheme()


    return (
        <Box
            p={2}
            sx={{
                // height: 100,
                width: '100%', backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
                boxShadow: "0px  0px 2px rgba(0,0,0,.25)"
            }}>
            <Stack direction={'row'} alignItems={'center'} spacing={3}>

                <ChatInput />

                <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }} >
                    <Stack sx={{ height: '100%', width: "100%", alignItems: 'center', placeContent: 'center', }}>
                        <IconButton>
                            <PaperPlaneTilt color='white' />
                        </IconButton>
                    </Stack>
                </Box>

            </Stack>
        </Box>
    )
}

export default Footer