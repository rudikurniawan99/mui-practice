import React from 'react'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonLink = ({ type, name, path, icon, addSx }) => {

  return (
    <Box
      component={Link} 
      to={path}
    >
      <Button
        variant={type === 'outline' ? 'outlined' : 'contained'} 
        endIcon={icon}
        sx={{
          borderRadius: '20px',
          textTransform: 'none',
          textDecoration: 'none',
          fontWeight: 600,
          ...addSx
        }}
      >{name}</Button>
    </Box>
  )
}

export default ButtonLink