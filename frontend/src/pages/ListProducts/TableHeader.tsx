import { Theme } from '@mui/material'
import * as React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFilter } from '../../providers/useFilter'

import Filter from './Filter'

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
            <Box sx={{ my: 0.5, height: 50 }} display="flex" alignItems="end">
                <Filter />
            </Box>
        </Box>
    )
}

export default ProductTableHeader
