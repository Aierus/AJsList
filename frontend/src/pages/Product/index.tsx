import * as React from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useFetchPostByID } from '../../hooks/useFetch'

import ProductInternal from './ProductInternal'

const Product = () => {
    let { id } = useParams()
    const { data, loading, error } = useFetchPostByID(id)

    if (loading) {
        return <LoadingSpinner />
    } else if (data) {
        return <ProductInternal {...data} />
    } else {
        return <p style={{ color: '#ffffff' }}>Error Fetching Post</p>
    }
}

export default Product
