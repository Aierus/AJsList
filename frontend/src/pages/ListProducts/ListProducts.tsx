import * as React from 'react'

import { useFetchPosts } from '../../hooks/useFetch'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import TableHeader from './TableHeader'
import ProductCardList from './ProductCardList'

const ListProductsInternal = () => {
    const theme = useTheme()
    const { data, loading, error } = useFetchPosts()

    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={3} sx={{ pt: 10 }}>
                <TableHeader theme={theme} />

                <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={3}
                    justifyContent="center"
                >
                    {loading ? (
                        <p style={{ color: '#ffffff' }}>Loading...</p>
                    ) : (
                        <ProductCardList data={data} />
                    )}
                </Box>
            </Stack>
        </Container>
    )
}

export default ListProductsInternal
