import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function LoadingSpinner() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Box>
    )
}
