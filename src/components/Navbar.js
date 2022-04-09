import { AppBar, Container, Toolbar, Typography, Box, useMediaQuery, Button, Drawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Send as SendIcon, Menu as MenuIcon } from '@mui/icons-material'
import React from 'react'
import { LogoImage } from '../assets/images'
import NavLink from './atoms/NavLink'
import ButtonLink from './atoms/ButtonLink'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up('md'))
  const [isOpen, setIsOpen] = useState(false)
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

  const drawer = (
    <Box
      display={upMd ? 'flex' : 'block'} 
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        display='flex'
        mr={5}
        gap={4}
        sx={{
          flexDirection: upMd ? 'row' : 'column'
        }}
      >
        {navLinks.map((link) => (
          <NavLink key={link.path} path={link.path} name={link.name}/>
        ))}
      </Box>
      <Box
        display='flex'
        gap={2}
        sx={{
          flexDirection: upMd ? 'row' : 'column'
        }}
      >
        <ButtonLink
          type='contain'
          path='/login'
          name='Login'
          addSx={{
            width: '100%'
          }}
        />
        <ButtonLink
          type='outline'
          path='/register'
          name='Register'
          icon={<SendIcon />}
          addSx={{
            width: '100%'
          }}
        />
      </Box>
    </Box>
  )
    
  

  

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
            component={Link}
            to='/'
            display='flex' 
            gap={1}
            sx={{
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <img
              width={40} 
              src={LogoImage} alt="" />
            <Typography
              variant='subtitle1' 
              display={upMd ? 'inline' : 'none'}
              color={theme.palette.common.white}
            >ARTVISTA</Typography>
          </Box>
          {upMd ? drawer : (
            <Button
              sx={{
                color: theme.palette.grey[400]
              }}
              onClick={() => setIsOpen(!isOpen)} >
              <MenuIcon />
            </Button>
          )}
          <Drawer
            anchor='top' 
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
          >
            <Box
              padding={2} 
            >
              {drawer}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar