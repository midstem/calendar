import { Theme } from '@mui/system'

const DialogContentText = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.primary,
      fontSize: 14,
      fontWeight: 400,
      paddingBottom: 52,
    }),
  },
}

export default DialogContentText
