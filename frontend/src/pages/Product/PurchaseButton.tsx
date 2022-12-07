import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { Button } from '@mui/material'

declare var require: any
const Web3 = require('web3')

import { useEthereum } from '../../providers/useEthereuem'
import { PostType } from '../../hooks/useFetch'
import { Navigate } from 'react-router-dom'

const RATE_URL = 'https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD'

const PurchaseButton = ({ product }: { product: PostType }) => {
    const { account, metamaskProvider } = useEthereum()
    const [ethRate, setEthRate] = useState<number>(0)
    const [purchased, setPurchased] = useState<boolean>(false)
    const web3 = new Web3(
        'https://goerli.infura.io/v3/a6390835460847db8a02310768e14cfa',
    )

    useEffect(() => {
        metamaskProvider
            .request({
                method: 'eth_call',
                params: [
                    {
                        to: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
                        data: '0x50d25bcd',
                    },
                    'latest',
                ],
            })
            .then((res: string) => setEthRate(Number(res) / 10 ** 8))
    }, [])

    const transact = async () => {
        const priceInEth = (Number(product.price) / ethRate).toPrecision(5)

        const txParams = {
            to: product.username,
            from: account,
            value: web3.utils.toWei(priceInEth, 'finney'),
            chainId: metamaskProvider.chainId,
        }

        metamaskProvider
            .request({
                method: 'eth_sendTransaction',
                params: [txParams],
            })
            .then((res: any) => {
                alert('Transaction Completed')
                axios
                    .delete(`/api/post/delete/${product._id}`)
                    .then((res) => setPurchased(true))
            })
    }

    if (purchased) {
        setTimeout(() => {}, 1000)
        return <Navigate to="/" />
    }
    return (
        <Button variant="outlined" onClick={transact}>
            Purchase
        </Button>
    )
}

export default PurchaseButton
