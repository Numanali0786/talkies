import { useTheme } from '@mui/material/styles'
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Stack, Typography } from '@mui/material'
import React from 'react'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app'
import { faker } from '@faker-js/faker'
import AntSwitch from './AntSwitch'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const BlockDialog = ({ open, handleClose }) => {

  return <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"Block this contact"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Are you sure to block this contact?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
}
const DeleteDialog = ({ open, handleClose }) => {

  return <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"delete this contact"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Are you sure to delete this contact?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
}

const Contact = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [openBlock, setOpenBlock] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenBlock = () => {
    setOpenBlock(true);
  };

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{
        height: '100%'
      }}>
        {/* Header */}
        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0 0 0 .25)",
          width: '100%',
          backgroundColor: theme.palette.mode === 'light' ? '#f8faff' : theme.palette.background
        }}>
          <Stack direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            spacing={3}
            sx={{
              height: '100%',
              p: 2
            }}>
            <Typography variant='subtitle2'>Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSidebar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* body */}
        <Stack sx={{ height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll' }} p={3} spacing={3} >
          <Stack alignItems={'center'} direction={'row'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{
              height: 64,
              width: 64
            }} />
            <Stack spacing={.5}>
              <Typography variant='article' fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant='article' fontWeight={500}>
                {'+91 29 29 93'}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack spacing={1} alignContent={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant='overline'>
                Voice
              </Typography>
            </Stack>
            <Stack spacing={1} alignContent={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant='overline'>
                Video
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={.5}>
            <Typography variant='artical'>
              About
            </Typography>
            <Typography variant='body2'>
              Imagination is the best quality.
            </Typography>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography>
              Media Links and Docs
            </Typography>
            <Button onClick={() => dispatch(UpdateSidebarType('SHARED'))} endIcon={<CaretRight />}>401</Button>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt='food' />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant='subtitle2'>Starred Message</Typography>
            </Stack>
            <IconButton onClick={() => dispatch(UpdateSidebarType('STARRED'))}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant='subtitle2'>Mute Notification</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>
            1 group in common
          </Typography>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Avatar src={faker.image.avatar()} />
            <Stack spacing={.5}>
              <Typography variant='subtitle2'>Coding Master</Typography>
              <Typography variant='caption'>Owl, Parrot,Cat</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Button onClick={()=>setOpenBlock(true)} variant='outlined' fullWidth startIcon={<Prohibit />}>
              Block
            </Button >
            <Button onClick={()=>setOpenDelete(true)} variant='outlined' fullWidth startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />} 
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />} 
    </Box>
  )
}

export default Contact