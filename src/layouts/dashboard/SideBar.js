import { Avatar, Box, Divider, IconButton, Stack, Menu, MenuItem } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Gear } from 'phosphor-react'
import React, { useState } from 'react'
import useSettings from '../../hooks/useSettings'
import AntSwitch from '../../components/AntSwitch'
import { faker } from '@faker-js/faker'
import Logo from "../../assets/Images/logo.png"
import { Nav_Buttons, Profile_Menu } from '../../data'
const SideBar = () => {
  const theme = useTheme()
  const [selected, setselected] = useState(0)
  const { onToggleMode } = useSettings()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, height: '100vh', width: '100px', boxShadow: "0px 0px 2px rgba(0,0,0,.25)" }}>
      <Stack direction="column" alignItems="center" sx={{ height: "100%" }} spacing={3} justifyContent={"space-between"}>
        <Stack alignItems="center" spacing={4}>
          <Box sx={{
            // backgroundColor: theme.palette.primary.main,
            // height: 64, width: 64, borderRadius: 1.5
          }}>

            <img style={{borderRadius:'50%'}} src={Logo} alt="logo" />
          </Box>
          <Stack spacing={3} sx={{ width: "max-content" }} direction="column" alignItems="center" >
            {Nav_Buttons.map((el) => (
              el.index === selected ?
                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton sx={{ width: 'max-content', color: 'white' }} key={el.index}>{el.icon}</IconButton>
                </Box> :
                <IconButton onClick={() => setselected(el.index)} sx={{ width: 'max-content', color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={el.index}>{el.icon}</IconButton>
            ))}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ?

              <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton sx={{ maxWidth: 'max-content', color: 'black' }}>

                  <Gear />
                </IconButton>
              </Box>
              :
              <IconButton sx={{ maxWidth: 'max-content', color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} onClick={() => setselected(3)}>
                <Gear />
              </IconButton>
            }
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch onChange={() => onToggleMode()} defaultChecked />
          <Stack>
            <Avatar id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} src={faker.image.avatar()}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >

              {Profile_Menu.map((el) => (
                <MenuItem onClick={handleClose}>
                  <Stack direction={'row'} alignItems={'center'} sx={{ width: 100 }} justifyContent={'space-between'}>
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Menu>
          </Stack>

        </Stack>
      </Stack>
    </Box>
  )
}

export default SideBar