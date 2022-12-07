import * as React from 'react'
import { createContext, useState, useContext } from 'react'

interface ProductContext {
    pageState: 'View' | 'Edit'
    setPageState: React.Dispatch<React.SetStateAction<'View' | 'Edit'>>
}

const defaultContext: ProductContext = {
    pageState: 'View',
    setPageState: () => {},
}

const productContext = createContext<ProductContext>(defaultContext)

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [pageState, setPageState] = useState<'View' | 'Edit'>('View')

    return (
        <productContext.Provider value={{ pageState, setPageState }}>
            {children}
        </productContext.Provider>
    )
}

export const usePageContext = () => useContext(productContext)
