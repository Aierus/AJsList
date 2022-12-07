import * as React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { Container, useTheme } from '@mui/material'

import { useEthereum } from '../../providers/useEthereuem'
import CreatePostForm from '../../components/CreatePostForm'

export const CreateProduct = () => {
    const { isConnected, account, metamaskProvider } = useEthereum()
    const theme = useTheme()

    const metamaskAlert = async () => {
        alert('Please Connect to MetaMask!')
    }

    if (!isConnected) {
        metamaskAlert()
        return <Navigate to="/" />
    } else {
        return (
            <Container sx={{ py: 5 }}>
                {/* Begin Product Edit Form Component here */}
                <CreatePostForm account={account} />
            </Container>
        )
    }
}
