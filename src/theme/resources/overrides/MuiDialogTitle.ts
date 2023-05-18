import { Theme } from '@mui/system'

const MuiDialogTitle = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.secondary.main,
      padding: 28,
      lineHeight: 1,
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
    }),
  },
}

export default MuiDialogTitle
