import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'

import { theme } from './theme'
import ListProducts from './pages/ListProducts'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
                sx={{
                    background: theme.palette.background.default,
                    minHeight: '100vw',
                }}
            >
                <Routes>
                    <Route path="" element={<ListProducts />} />
                    <Route path="/:id" element={<h1>Product ID</h1>} />
                </Routes>
            </Container>
        </ThemeProvider>
    )
}

export default App
