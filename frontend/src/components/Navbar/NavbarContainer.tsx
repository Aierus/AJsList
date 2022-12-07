import * as React from 'react'
import { Link } from 'react-router-dom'

import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { ConnectButton } from './ConnectButton'

const NavbarContainer = () => {
    const theme = useTheme()
    return (
        <Container
            maxWidth={false}
            sx={{
                height: 75,
                background: theme.palette.background.default,
            }}
            style={{ position: 'fixed', padding: '0 48', left: -3 }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
            >
                <Typography
                    variant="h5"
                    component="h1"
                    color={theme.palette.text.primary}
                >
                    AJ's List
                </Typography>

                <Link to="/create">
                    <Button variant="contained">Create Post</Button>
                </Link>

                <ConnectButton />
            </Box>
        </Container>
    )
}

export default NavbarContainer
