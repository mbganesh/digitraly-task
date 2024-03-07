import { Box, Typography } from '@mui/material'
import ProfileModal from 'components/ProfileModal'
import UserTable from 'components/UserTable'
import React from 'react'

const HomePage = ({open,setOpen}) => {
  return (
    <Box>
      <Typography variant="h4" textAlign='center' p={1} color='#025896' >User Data</Typography>
      <UserTable/>
      <ProfileModal open={open} setOpen={setOpen} />
    </Box>
  )
}

export default HomePage