import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const MyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    color: theme.palette.primary.contrastText
  }
}))

export default MyButton