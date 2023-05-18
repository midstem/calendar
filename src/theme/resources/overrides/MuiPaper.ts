import { PaperPropsVariantOverrides } from '@mui/material/Paper'
import { Theme } from '@mui/system'

const MuiPaper = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      borderRadius: 5,
      boxShadow: 'none',
      '&.MuiMenu-paper.MuiPopover-paper': {
        padding: '8px 0',
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: 10,
        boxShadow: 'none',
      },
      '& .MuiList-root': {
        padding: 0,
      },
      '& .MuiList-root .MuiMenuItem-root': {
        paddingTop: 5,
        paddingBottom: 5,
        lineHeight: '22px',
      },

      '& .MuiList-root .MuiMenuItem-root:hover, & .MuiList-root .MuiMenuItem-root.Mui-selected':
        {
          backgroundColor: theme.palette.secondary.lighter,
        },
    }),
  },
} as PaperPropsVariantOverrides

export default MuiPaper
