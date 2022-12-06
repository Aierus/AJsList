import * as React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'

import MetaMaskOnboarding from '@metamask/onboarding'

interface EthereumContext {
    isMetaMask: boolean //If false, the user will receive a message to install metamask.
    isConnected: boolean
    account: string
    requestAccount: () => void
    metamaskProvider: any
}

interface Window {
    ethereum: Ethereum
}

interface Ethereum {
    request: any
    selectedAddress: string
}

const defaultProvider: Ethereum = {
    request: '',
    selectedAddress: '',
}

const defaultContext: EthereumContext = {
    isMetaMask: false,
    isConnected: false,
    account: '',
    requestAccount: () => {},
    metamaskProvider: defaultProvider,
}

const baseEthereumContext = createContext<EthereumContext>(defaultContext)

export const EthereumProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isMetaMask, setIsMetaMask] = useState<boolean>(false)
    const [account, setAccount] = useState<string>('')
    const [isConnected, setIsConnected] = useState<boolean>(false)
    const [metamaskProvider, setMetamaskProvider] =
        useState<Ethereum>(defaultProvider)

    // Execute when the page is first loaded to check if any wallet,
    // provider is installed.
    useEffect(() => {
        if (window.ethereum.isMetaMask) {
            setIsMetaMask(window.ethereum.isMetaMask)
            setMetamaskProvider(window.ethereum)
            if (metamaskProvider.selectedAddress) {
                setAccount(metamaskProvider.selectedAddress)
                setIsConnected(true)
            }
        }
    }, [metamaskProvider])

    const requestAccount = async () => {
        if (isMetaMask) {
            const accounts = await metamaskProvider.request({
                method: 'eth_requestAccounts',
            })
            if (accounts.length > 0) {
                setAccount(accounts[0])
                setIsConnected(true)
            }
        } else {
            const onboarding = new MetaMaskOnboarding()
            onboarding.startOnboarding()
        }
    }

    return (
        <baseEthereumContext.Provider
            value={{
                isMetaMask,
                isConnected,
                account,
                requestAccount,
                metamaskProvider,
            }}
        >
            {children}
        </baseEthereumContext.Provider>
    )
}

export const useEthereum = () => useContext(baseEthereumContext)
