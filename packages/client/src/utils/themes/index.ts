/*
 * © 2021 Thoughtworks, Inc.
 */

import { CSSProperties } from 'react'
import { createMuiTheme, Theme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  /* eslint-disable */
  interface Palette {
    chart: Palette['primary'][]
    lightTitle: CSSProperties['color']
    lightMessage: CSSProperties['color']
    extLink: CSSProperties['color']
  }
  /* eslint-disable */
  interface PaletteOptions {
    chart: PaletteOptions['primary'][]
    lightTitle: CSSProperties['color']
    lightMessage: CSSProperties['color']
    extLink: CSSProperties['color']
  }
}

const determineTheme = (): Theme => {
  return createMuiTheme({
    palette: {
      type: 'light',
      background: {
        default: '#F1F1F1',
      },
      chart: [
        // primary
        { main: '#6D8EA6' },
        { main: '#14A5AB' },
        { main: '#4FA62F' },
        { main: '#E67310' },
        { main: '#D71E8D' },
        { main: '#834EFF' },
        { main: '#2580DC' },
        { main: '#FFBB33' },
        { main: '#305A85' },
        { main: '#A8000B' },
        // secondary
        { main: '#4D6474' },
        { main: '#008580' },
        { main: '#34880F' },
        { main: '#BF610F' },
        { main: '#A8166D' },
        { main: '#6637D5' },
        { main: '#1564B5' },
      ],
      lightTitle: 'rgba(0, 0, 0, 0.87)',
      lightMessage: '#b0bec5',
      // leaving this here in case the color theme changes base on dark mode
      extLink: '#00B7FF',
    },
  })
}

const getChartColors = (theme: Theme) => {
  return theme.palette.chart.map(({ main }) => main)
}

export { determineTheme, getChartColors }
