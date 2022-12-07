import * as React from 'react'
import { useEffect } from 'react'

import { useFetchPosts } from '../../hooks/useFetch'
import { useFilter } from '../../providers/useFilter'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import TableHeader from './TableHeader'
import ProductCardList from './ProductCardList'
import LoadingSpinner from '../../components/LoadingSpinner'

const ListProductsInternal = () => {
    const theme = useTheme()
    const { filter, setFilter } = useFilter()
    const { data, loading, error } = useFetchPosts(filter)

    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={3} sx={{ pt: 10 }}>
                <TableHeader theme={theme} />
                {loading ? <LoadingSpinner /> : <ProductCardList data={data} />}
            </Stack>
        </Container>
    )
}

export default ListProductsInternal
