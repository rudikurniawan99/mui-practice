import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Send as SendIcon } from '@mui/icons-material'
import React from 'react'
import { LogoImage } from '../assets/images'
import NavLink from './atoms/NavLink'
import ButtonLink from './atoms/ButtonLink'

const Navbar = () => {

  const navLinks = [
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/categories',
      name: 'Categories',
    },
    {
      path: '/trending',
      name: 'Trending'
    },
    {
      path: '/event',
      name: 'Event'
    }
  ]

  const theme = useTheme()

  return (
    <AppBar
      color='transparent'
      position='relative'
      elevation={0}
    >
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            display='flex' 
            gap={1}
            sx={{
              alignItems: 'center'
            }}
          >
            <img
              width={40} 
              src={LogoImage} alt="" />
            <Typography
              variant='subtitle1' 
              color={theme.palette.common.white}
            >ARTVISTA</Typography>
          </Box>
          <Box
            display='flex' 
            gap={4}
          >
            {navLinks.map((link) => (
              <NavLink key={link.path} path={link.path} name={link.name}/>
            ))}
          </Box>
          <Box
            display='flex'
            gap={2} 
          >
            <ButtonLink
              type='contain'
              path='/login'
              name='Login'
            />
            <ButtonLink
              type='outline'
              path='/register'
              name='Register'
              icon={<SendIcon />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar