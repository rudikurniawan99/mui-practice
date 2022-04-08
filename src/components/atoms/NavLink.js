import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

const NavLink = ({ path, name }) => {

  const theme = useTheme()

  return (
    <Box
      component={Link}
      to={path}
      color={theme.palette.grey[400]}
      sx={{
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.grey[300]
        }
      }}
    >
      {name}
    </Box>
  )
}

export default NavLink