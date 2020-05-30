import { COLORS, MEDIA_BREAKPOINTS } from './constants'

const theme = {
  colors: {
    accent: COLORS.ORANGE,
    action: COLORS.NEON_GREEN,
    primary: COLORS.BLACK,
    secondary: COLORS.PURPLE,
    navBackground: COLORS.DARK_GRAY,
  },
  media: {
    s: MEDIA_BREAKPOINTS.PHONE,
    l: MEDIA_BREAKPOINTS.SMALL_DESKTOP,
    m: MEDIA_BREAKPOINTS.TABLET,
  },
}

export type ThemeType = typeof theme
export default theme
