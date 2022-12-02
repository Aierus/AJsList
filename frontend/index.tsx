import App from './src/App'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './src/styles/style.scss'
import './src/styles/variables.scss'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)
