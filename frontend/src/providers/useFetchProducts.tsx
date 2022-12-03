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

const filterContext = createContext<ProductsContext>(defaultContext)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filterState, setFilterState] = useState<Filter>(null)

    return (
        <filterContext.Provider
            value={{ filter: filterState, setFilter: setFilterState }}
        >
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => useContext(filterContext)
