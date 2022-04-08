import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

const MainApp = () => {

  return (
    <div>
      <Navbar/>
      <Box>
        <Container>
          <Box
            sx={{
              paddingX: 3
            }}
          >
            tessss
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default MainApp