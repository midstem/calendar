import { Theme } from '@mui/system'

const MuiTab = {
  styleOverrides: {
    root: ({ theme: { spacing } }: { theme: Theme }) => ({
      textTransform: 'none',
      fontSize: '14px',
      padding: `${spacing(1)} ${spacing(3)}`,
      marginTop: spacing(2),
      '&.Mui-selected': {
        fontWeight: 700,
      },
    }),
  },
}

export default MuiTab
