import { Theme } from '@mui/material'
import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type PropTypes = {
    theme: Theme
}

const ProductTableHeader = ({ theme }: PropTypes) => {
    return (
        <Box
            display="flex"
            alignItems="end"
            justifyContent="space-between"
            borderBottom={`1px solid ${theme.palette.secondary.main}`}
        >
            <Typography
                variant="h4"
                component="h4"
                color={theme.palette.text.primary}
            >
                Products
            </Typography>
            <Typography
                variant="h6"
                component="h6"
                color={theme.palette.text.primary}
            >
                Filter
            </Typography>
        </Box>
    )
}

export default ProductTableHeader
