import { Box, Container, Grid, Typography, Avatar, AvatarGroup, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import ButtonLink from '../components/atoms/ButtonLink'
import Navbar from '../components/Navbar'
import { PlayArrow } from '@mui/icons-material'

const MainApp = () => {

  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <div>
      <Navbar/>
      <Box>
        <Container>
          <Box
            container
            component={Grid}
            paddingX={3}
            sx={{
              marginY: {
                xs: 4,
                lg: 10
              }
            }} 
          >
            <Grid 
              item
              xs={12}
              lg={8}
              display='grid'
              sx={{
                gap: {
                  lg: 4,
                  xs: 3
                }
              }}
            >
              <Typography
                variant={upMd ? 'h1' : 'h4'} 
              >Start Listen Your Favorite Podcast</Typography>
              <Typography>Artvista is an easy and powerful way to crate, promote and monetize your podcast. Everything you need for a successful podcast.</Typography>
              <ButtonLink
                type='contain'
                path='/go-to'
                name='Listen Now'
                icon={<PlayArrow />} 
              />
              <Box
                display='flex' 
                gap={1}
                sx={{
                  mt: -1,
                  alignItems: {
                    md: 'center',
                  },
                  flexDirection: {
                    md: 'row',
                    xs: 'column'
                  }

                }}
              >
                <AvatarGroup
                  total={24}
                  sx={{
                    justifyContent: 'start'
                  }}   
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography>More people are listening Artvista</Typography>
              </Box>
            </Grid>
            <Grid 
              item
              xs={12}
              lg={3}
            >2</Grid>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default MainApp