import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'

import { theme } from './theme'
import ListProducts from './pages/ListProducts'
import Product from './pages/Product'
import Navbar from './components/Navbar'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container
                maxWidth={false}
                id="theme-container"
                sx={{
                    background: theme.palette.background.default,
                    minHeight: '100vw',
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="" element={<ListProducts />} />
                    <Route path="/:id" element={<Product />} />
                </Routes>
            </Container>
        </ThemeProvider>
    )
}

export default App
