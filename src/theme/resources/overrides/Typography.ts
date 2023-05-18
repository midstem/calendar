import { TypographyPropsVariantOverrides } from '@mui/material/Typography'

const Typography = {
  fontFamily: ['Manrope', 'sans-serif'].join(','),
  fontSize: 16,
  h1: {
    fontSize: '3.5rem', //56px;
    fontWeight: 'bold',
    letterSpacing: 0,
    fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
  },
  h2: {
    fontSize: '2.5rem', //40px
    fontWeight: 'bold',
    letterSpacing: '0.016rem',
    fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
  },
  h3: {
    fontSize: '2rem', // 32px
    fontWeight: 'bold',
    letterSpacing: 0,
    fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
  },
  h4: {
    fontSize: '1.75rem', //28px
    letterSpacing: '0.011rem',
    fontWeight: 'bold',
    fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
  },
  h5: {
    fontSize: '1.25rem', //20px
    letterSpacing: 0,
    fontFamily: ['Byrd', 'Manrope', 'sans-serif'].join(','),
  },
  h6: {
    fontSize: '1rem', //16px
    letterSpacing: 0,
    fontFamily: ['Manrope', 'sans-serif'].join(','),
  },
  body1: {
    fontSize: '1rem', //16px
    letterSpacing: 0,
  },
  body2: {
    fontSize: '0.875rem', //14px
    letterSpacing: '0.031rem',
  },
  caption: {
    fontSize: '0.75rem', //12px
    letterSpacing: '0.022rem',
  },
  overline: {
    fontSize: '0.625rem', //10px
    letterSpacing: '0.094rem', //1.5 px
  },
} as TypographyPropsVariantOverrides

export default Typography
