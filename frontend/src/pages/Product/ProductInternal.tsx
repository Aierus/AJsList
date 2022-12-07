import * as React from 'react'

import { Box, Container, Stack, useTheme } from '@mui/system'
import { ThemeContext } from '@emotion/react'
import { Typography } from '@mui/material'
import { BuyButton } from '../../components/BuyButton'
import { ConnectButton } from '../../components/Navbar/ConnectButton'

declare var require: any
const img = require('../../assets/sample-img.jpg')

function ProductInternal() {
    const theme = useTheme()

    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={2} sx={{ pt: 10 }} height="80vh">
                <Box height="80%" display="flex">
                    <Box
                        id="img-box"
                        sx={{ background: theme.palette.background.paper }}
                        height="100%"
                        width="50%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            src={img}
                            height="100%"
                            style={{ borderRadius: '2.5%' }}
                        />
                      
                    </Box>

                   
                    <Container
                    id="buy-button-container"
                    maxWidth={false}
                    sx={{
                        height: 75,
                        width: 25,
                        background: theme.palette.background.default,
                    }}
                    style={{ position: 'fixed', padding: '0 48', left: -3 }}
                    > 
                      <BuyButton />
 
                    </Container>
                      

                    <Stack
                        id="product-details-box"
                        width="50%"
                        height="100%"
                        spacing={3}
                        sx={{ px: 2 }}
                    >
                        <Typography variant="h6" component="h1" fontSize="2rem" color="white">
                            Product Name
                        </Typography>
                        <Typography variant="h6" component="h1" fontSize="2rem" color="white">
                            Product Location
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}

export default ProductInternal
