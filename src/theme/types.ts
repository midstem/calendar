import { Theme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string
    lighter1?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
    lighter1?: string
  }
  interface DeprecatedThemeOptions {
    header: {
      height: React.CSSProperties['height']
    }
    sidebar: {
      width: React.CSSProperties['width']
    }
  }
}

export interface MUITheme extends Theme {
  sidebar: {
    width: number | string
  }
  header: {
    height: number | string
  }
}
