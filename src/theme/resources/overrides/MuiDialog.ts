import { Theme } from '@mui/system'

const MuiDialog = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 0
      }
    })
  }
}

export default MuiDialog
