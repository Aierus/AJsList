import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import ProductCard from '../components/ProductCard'

const ProductsPage = () => {
    const theme = useTheme()

    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={3} sx={{ pt: 10 }}>
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

                <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={3}
                    justifyContent="center"
                >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>
            </Stack>
        </Container>
    )
}

export default ProductsPage
