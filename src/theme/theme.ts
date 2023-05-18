import { createTheme } from '@mui/material'

import { colors, componentsOverrides, Typography, sizes } from './resources'

// add custom fields to the theme object
declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: string | number
    }
    sidebar: {
      width: string | number
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    header?: {
      height?: string | number
    }
    sidebar?: {
      width?: string | number
    }
  }
  // custom breakpoints
  interface BreakpointOverrides {
    tablet: true
    desktop: true
  }
}

const theme = createTheme({
  palette: {
    text: {
      primary: colors.dimGrey,
      secondary: colors.eerieBlack,
      disabled: colors.grey
    },
    primary: {
      dark: colors.crimson,
      main: colors.pitchPuff,
      light: colors.mistyRose,
      lighter: colors.seaShel
    },
    secondary: {
      dark: colors.darkGreen,
      main: colors.teal,
      light: colors.powderBlue,
      lighter: colors.aliseBlue
    },
    grey: {
      900: colors.eerieBlack,
      800: colors.dimGrey,
      700: colors.grey,
      600: colors.whiteSmoke
    },
    success: {
      main: colors.teal,
      light: colors.powderBlue,
      lighter: colors.lightTeal
    },
    error: {
      main: colors.crimson,
      light: colors.pitchPuff
    },
    common: {
      white: colors.white
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 960,
      desktop: 1024,
      lg: 1200,
      xl: 1440
    }
  },
  //@ts-ignore
  components: componentsOverrides,
  typography: Typography,

  header: {
    height: sizes.header.height
  },
  sidebar: {
    width: sizes.sidebar.width
  }
})

export default theme
