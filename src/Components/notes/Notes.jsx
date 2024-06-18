import { Box, styled } from '@mui/material'
import React from 'react'
import Form from './Form';

const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));

const Notes = () => {
  return (
    <Box sx={{display: 'flex', width: '100%'}}>
        <Box component="main" sx={{ width: "100%", p: 3 }}>
            <DrawerHeader></DrawerHeader>
            <Form/>
        </Box>
    </Box>
  )
}

export default Notes