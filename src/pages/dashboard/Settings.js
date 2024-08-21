import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker'
import {
    CaretLeft,
    Bell,
    Lock,
    Key,
    PencilCircle,
    Image,
    Note,
    Keyboard,
    Info,
} from "phosphor-react";
import Shortcuts from '../../sections/settings/Shortcuts';



const Settings = () => {
    const theme = useTheme()
    const [openShortcuts, setOpenShortcuts] = React.useState(false);

    const handleOpenShortcuts = () => {
        setOpenShortcuts(true);
    };

    const handleCloseShortcuts = () => {
        setOpenShortcuts(false);
    };

    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => { },
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => { },
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => { },
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            //   onclick: handleOpenTheme,
            onclick: () => { },
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Chat Wallpaper",
            onclick: () => { },
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Request Account Info",
            onclick: () => { },
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: "Keyboard Shortcuts",
            onclick: handleOpenShortcuts,
            // onclick: () => { },
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => { },
        },
    ];

    return (
        <>
            <Stack direction={'row'} sx={{ width: '100%' }}>
                {/* left */}
                <Box sx={{
                    overflowY: 'scroll', height: '100vh', width: '320px',
                    backgroundColor: theme.palette.mode === 'light' ? '#f8faff' : theme.palette.background,
                    boxShadow: '0px 0px 2px rgba(0,0,0,.25'
                }}>

                    <Stack p={4} spacing={5}>
                        {/* header */}
                        <Stack direction={'row'} alignItems={'center'} spacing={3}>
                            <IconButton >
                                <CaretLeft size={24} color='#4b4b4b' />
                            </IconButton>
                            <Typography variant='h6'>Settings</Typography>
                        </Stack>
                        {/* profile */}
                        <Stack direction={'row'} spacing={3}>
                            <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
                            <Stack spacing={.5}>
                                <Typography variant='article'>
                                    {faker.name.fullName()}
                                </Typography>
                                <Typography variant='body2'>
                                    {faker.random.words()}
                                </Typography>
                            </Stack>
                        </Stack>



                        {/* list */}
                        <Stack spacing={4}>
                            {list.map(({ key, icon, title, onclick }) => (
                                <Stack key={key} spacing={2} sx={{ cursor: 'pointer' }}  onClick={onclick}>
                                    <Stack direction={'row'} spacing={2} alignItems={'center'} >
                                        {icon}
                                        <Typography variant='body2'>{title}</Typography>
                                    </Stack>
                                    {key !== 7 && <Divider />}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>

                </Box>

                {/* right */}

            </Stack>
            {
                openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
            }
        </>
    )
}

export default Settings