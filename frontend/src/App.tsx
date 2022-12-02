import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProductsPage from './pages/Products'

function App() {
    return (
        <Routes>
            <Route path="" element={<ProductsPage />} />
        </Routes>
    )
}

export default App
