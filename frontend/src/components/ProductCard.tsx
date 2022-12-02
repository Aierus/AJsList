import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

const img = require('../assets/sample-img.jpg')

const ProductCard = () => {
    const theme = useTheme()
    return (
        <Box
            width="20%"
            borderRadius="2.5%"
            overflow="hidden"
            sx={{
                aspectRatio: '2 / 3',
                background: theme.palette.background.paper,
            }}
        >
            <img src={img} width="100%" height="66%" />
        </Box>
    )
}

export default ProductCard
