import { ThemeProvider, createTheme } from '@mui/material/styles'

import ListProducts from './pages/ListProducts'

export const theme = createTheme({
    palette: {
        background: {
            default: '#111717',
            paper: '#292E2E',
        },
        text: {
            primary: '#F8F8F8',
            secondary: '#CECECE',
        },
        primary: {
            main: '#8FCEF0',
        },
        secondary: {
            main: '#F8F8F8',
            dark: '#CECECE',
        },
    },
})
