import * as React from 'react'
import { createContext, useState, useContext } from 'react'

type Filter = {
    username: string
} | null

interface ProductsContext {
    filter: Filter
    setFilter?: React.Dispatch<React.SetStateAction<Filter>>
}

const defaultContext: ProductsContext = {
    filter: null,
}

const productsContext = createContext<ProductsContext>(defaultContext)

export const ProductsProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [filterState, setFilterState] = useState<Filter>(null)

    return (
        <productsContext.Provider
            value={{ filter: filterState, setFilter: setFilterState }}
        >
            {children}
        </productsContext.Provider>
    )
}

export const useFilter = () => useContext(productsContext)
