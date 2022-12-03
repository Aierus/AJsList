import * as React from 'react'

import { useFetchPosts } from '../../hooks/useFetch'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

import ProductCard from '../../components/ProductCard'
import TableHeader from './TableHeader'
import ProductCardList from './ProductCardList'
import ListProductsInternal from './ListProducts'
import { FilterProvider } from '../../providers/useFetchProducts'

const ListProducts = () => {
    return (
        <FilterProvider>
            <ListProductsInternal />
        </FilterProvider>
    )
}

export default ListProducts
