import * as React from 'react'
import { createContext, useState, useContext } from 'react'

interface ProductsContext {
    filter: string | null
    setFilter: React.Dispatch<React.SetStateAction<string | null>>
}

const defaultContext: ProductsContext = {
    filter: null,
    setFilter: () => {},
}

const filterContext = createContext<ProductsContext>(defaultContext)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [filterState, setFilterState] = useState<string | null>(null)

    return (
        <filterContext.Provider
            value={{ filter: filterState, setFilter: setFilterState }}
        >
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => useContext(filterContext)
