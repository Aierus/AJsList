import * as React from 'react'
import { PostType } from '../../hooks/useFetch'

import { Theme } from '@mui/material'

import ProductCard from '../../components/ProductCard'

import Box from '@mui/material/Box'

type PropTypes = {
    data: PostType[] | undefined
}

const ProductCardList = ({ data }: PropTypes) => {
    if (!data) {
        return <></>
    }

    return (
        <Box
            display="flex"
            gap={3}
            justifyContent="center"
            flexWrap="wrap"
            width="100"
            id="outer-box"
        >
            {data.map((product, productIdx) => (
                <ProductCard data={product} keyVal={productIdx} />
            ))}
        </Box>
    )
}

export default ProductCardList
