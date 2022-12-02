import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'
import ProductsPage from './pages/Products'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="" element={<ProductsPage />} />
                <Route path="/:id" element={<h1>Product ID</h1>} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
