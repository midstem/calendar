import sizes from '../sizes'

const MuiDrawer = {
  styleOverrides: {
    paper: {
      borderRadius: 0,
      height: `calc(100% - ${sizes.header.height}px)`,
      top: sizes.header.height,
      zIndex: 1,
      maxWidth: sizes.sidebar.width,
      width: sizes.sidebar.width
    }
  }
}

export default MuiDrawer
