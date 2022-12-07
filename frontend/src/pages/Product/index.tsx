import * as React from 'react'
import { useState, createContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useFetchPostByID } from '../../hooks/useFetch'

import ProductInternal from './ProductInternal'
import { usePageContext, ProductContextProvider } from './pageContext'

const Product = () => {
    let { id } = useParams()
    const { data, loading, error } = useFetchPostByID(id)

    if (loading) {
        return <LoadingSpinner />
    } else if (data) {
        return (
            <ProductContextProvider>
                <ProductInternal {...data} />
            </ProductContextProvider>
        )
    } else {
        return <p style={{ color: '#ffffff' }}>Error Fetching Post</p>
    }
}

export default Product
