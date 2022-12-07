import * as React from 'react'

import { Box, Typography, Stack, useTheme } from '@mui/material'

const LeftPanel = () => {
    const theme = useTheme()

    return (
        <Box
            width="35%"
            height="100%"
            borderRadius="6rem 0 0 3rem"
            border={`2px solid ${theme.palette.background.paper}`}
        >
            <Stack sx={{ p: 4, mt: 20 }} spacing={4}>
                <Typography
                    variant="h6"
                    component="h1"
                    fontSize="2rem"
                    textAlign="center"
                    color={theme.palette.text.primary}
                >
                    Welcome to AJ's List
                </Typography>
                <Box
                    width="100%"
                    border={`1px solid ${theme.palette.secondary.main}`}
                />
                <Typography
                    variant="h6"
                    component="h6"
                    fontSize="1.5rem"
                    textAlign="center"
                    color={theme.palette.text.primary}
                >
                    Where Web3 Meets Second Hand Sales
                </Typography>
            </Stack>
        </Box>
    )
}

export default LeftPanel
