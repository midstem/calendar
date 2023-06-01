import { Theme } from '@mui/system'

const MuiCheckbox = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.grey[700],
      padding: 5,
      '& .MuiSvgIcon-root': {
        width: 16,
        height: 16
      },
      '&.Mui-checked': {
        color: theme.palette.secondary.main
      }
    })
  }
}

export default MuiCheckbox
