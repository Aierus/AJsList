import * as React from 'react'

import ListProductsInternal from './ListProducts'
import { FilterProvider } from '../../providers/useFilter'

const ListProducts = () => {
    return (
        <FilterProvider>
            <ListProductsInternal />
        </FilterProvider>
    )
}

export default ListProducts
