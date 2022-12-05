import * as React from "react";
import { Button } from '@mui/material'
import MetaMaskOnboarding from '@metamask/onboarding'
import { MetaMaskInpageProvider } from "@metamask/providers";
import detectEthereumProvider from '@metamask/detect-provider';

const ethereum = window.ethereum as MetaMaskInpageProvider; // tsx workaround

const initialize = async () => {
  const provider = await detectEthereumProvider(); 
  if (provider) {  
    console.log(ethereum.isConnected());
  } else {
    console.log('Please install MetaMask!');
    const onboarding = new MetaMaskOnboarding();
    onboarding.startOnboarding();
  }

  const loadMetamask = async () => {
    // You need to await for user response on the metamask popup dialog
    const accounts = await ethereum.request<string[]>({ method: 'eth_requestAccounts' });
    if(accounts){
       console.log(accounts[0]);
       document.getElementById('connectButton').innerText = accounts[0].slice(0,7) + "..."
    }
  }

  const chainId = await ethereum.request({ method: 'eth_chainId' });
  console.log("Chain ID == %s", chainId) 
  // document.getElementById('connectButton').innerText = accounts[0]
  
  loadMetamask()
}

export const ConnectButton = () => { 
  return (
    <Button 
      id='connectButton'
      sx={{ background: 'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)'}} 
      onClick={() => { 
        initialize();
      }}
    variant="contained">
    Connect</Button>
  )
}

                
export default ConnectButton
