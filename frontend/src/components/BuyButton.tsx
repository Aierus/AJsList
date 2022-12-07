import * as React from 'react'
import { Button } from '@mui/material'
import { useEthereum } from '../providers/useEthereuem'

const Web3 = require("web3");

async function priceFeed() {
  // Configuring the connection to an Ethereum node
  const network = "goerli";
  const web3 = new Web3(
    new Web3.providers.HttpProvider( 
      `https://goerli.infura.io/v3/a6390835460847db8a02310768e14cfa`
    )
  )
  // Get current ETH/USD exchange rate. Yes, the block of json is required
  const aggregatorV3InterfaceABI = [
    {
      inputs: [],
      name: "decimals",
      outputs: [{internalType: "uint8", name: "", type: "uint8"}],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "description",
      outputs: [{internalType: "string", name: "", type: "string"}],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{internalType: "uint80", name: "_roundId", type: "uint80"}],
      name: "getRoundData",
      outputs: [
        {internalType: "uint80", name: "roundId", type: "uint80"},
        {internalType: "int256", name: "answer", type: "int256"},
        {internalType: "uint256", name: "startedAt", type: "uint256"},
        {internalType: "uint256", name: "updatedAt", type: "uint256"},
        {internalType: "uint80", name: "answeredInRound", type: "uint80"},
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "latestRoundData",
      outputs: [
        {internalType: "uint80", name: "roundId", type: "uint80"},
        {internalType: "int256", name: "answer", type: "int256"},
        {internalType: "uint256", name: "startedAt", type: "uint256"},
        {internalType: "uint256", name: "updatedAt", type: "uint256"},
        {internalType: "uint80", name: "answeredInRound", type: "uint80"},
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "version",
      outputs: [{internalType: "uint256", name: "", type: "uint256"}],
      stateMutability: "view",
      type: "function",
    },
  ]

  const addr = '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e' //chainlink eth/usd goerli contract
  const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)

  return priceFeed.methods
    .latestRoundData()
    .call()
    .then((roundData) => {
      // Do something with roundData
      // console.log("Latest Round Data", roundData)
      console.log("Price = ", roundData.answer / (10 ** 8))
      return roundData.answer / (10 ** 8)
    })

}

export const BuyButton = () => {
  const { isMetaMask, isConnected, account, requestAccount } = useEthereum()
  const web3 = new Web3(
    new Web3.providers.HttpProvider( 
      `https://goerli.infura.io/v3/a6390835460847db8a02310768e14cfa`
    )
  )

 async function transact() {
  const EthUsdRate = await priceFeed()
  // console.log("Eth/USD = ", EthUsdRate)
  const itemPrice = 10
  const priceInEthNum = itemPrice / EthUsdRate
  const priceInEth = priceInEthNum.toString().slice(0, 10)
  // console.log("PriceInEth = ", priceInEth)

   const txParams = {
     to: "0xA46049Ca42Bad9Bbc5e4F6D13FCf804415fCd32E", 
     from: ethereum.selectedAddress,
     value:web3.utils.numberToHex(web3.utils.toWei(priceInEth, 'ether')),
     chainId: "0x5",
   };

   const txHash = await ethereum.request({
     method: 'eth_sendTransaction',
     params: [txParams]
   })

 }

  return (
   <Button
      id="buy-button"
      sx={{background:
        'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)'
     }}
      variant="contained"
     onClick={async() => await transact()}
      >
     Buy!
    </Button>
  )
}

export default BuyButton
