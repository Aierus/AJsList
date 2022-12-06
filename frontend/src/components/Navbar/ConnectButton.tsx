import * as React from 'react'
import { Button } from '@mui/material'

import { useEthereum } from '../../providers/useEthereuem'

const shrotenAddressString = (address: string) => address.slice(0, 7) + '...'

export const ConnectButton = () => {
    const { isMetaMask, isConnected, account, requestAccount } = useEthereum()

    return (
        <Button
            id="connectButton"
            sx={{
                background:
                    'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
            }}
            variant="contained"
            onClick={requestAccount}
        >
            {isConnected ? shrotenAddressString(account) : 'Connect'}
        </Button>
    )
}

export default ConnectButton
