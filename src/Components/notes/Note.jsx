import React from 'react'
import { Card, CardActions, CardContent, Typography, styled } from '@mui/material'
import {
    ArchiveOutlined as Archive,
    DeleteOutlined as Delete,
  } from "@mui/icons-material";

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`
const Note = ({note}) => {
  return (
    <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
            <Archive fontSize='small' sx={{marginLeft: "auto", color: "#757575"}}/>
            <Delete fontSize='small'sx={{color: "#757575"}}/>
        </CardActions>
    </StyledCard>
  )
}

export default Note