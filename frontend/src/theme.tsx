import { ThemeProvider, createTheme } from '@mui/material/styles'

import ProductsPage from './pages/Products'

export const theme = createTheme({
    palette: {
        background: {
            default: '#111717',
            paper: '#292E2E',
        },
        text: {
            primary: '#F8F8F8',
            secondary: '#DFDFDF',
        },
        primary: {
            main: '#8FCEF0',
        },
    },
})
