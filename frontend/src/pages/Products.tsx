import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const ProductsPage = () => {
    const theme = useTheme()

    return (
        <Container
            maxWidth={false}
            sx={{
                background: theme.palette.background.default,
                minHeight: '150vh',
            }}
        >
            <Box>
                <h1>Hello test</h1>
            </Box>
        </Container>
    )
}

export default ProductsPage
