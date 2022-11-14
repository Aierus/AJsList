pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// https://medium.com/0xcode/integrating-chainlink-oracles-with-smart-contracts-on-the-ethereum-blockchain-a1578e8b5151

contract GetPriceFeed {AggregatorV3Interface internal priceFeed;constructor() {
        priceFeed = AggregatorV3Interface(0x326C977E6efc84E512bB9C30f76E30c160eD06FB); // goerli testnet chainlink address https://docs.chain.link/docs/link-token-contracts/
    }function getPrice() public view returns (int) {
        (
            , 
            int price,
            ,
            ,
            
        ) = priceFeed.latestRoundData();
        return price;
    }
}

// Using web3.js -> web3.eth.getBalance("0x32aF98327E025547926AeD377e41C95169C6A6dd").then(function(result) { console.log(web3.utils.fromWei(result, "ether")) })