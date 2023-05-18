import { AppBarPropsColorOverrides } from '@mui/material/AppBar'

import sizes from '../sizes'

const MuiAppBar: AppBarPropsColorOverrides = {
  styleOverrides: {
    root: {
      padding: '0 20px',
      borderRadius: 0,
      height: sizes.header.height,
      zIndex: 2
    }
  }
}

export default MuiAppBar
