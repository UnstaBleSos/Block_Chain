const {BlockChain,Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC(`secp256k1`)


const myKey = ec.keyFromPrivate('f858d1c8c0545f77064c9685f9ca9d13b9b4cef1715668ac30da4c8c2593c840')
const myWalletAddress = myKey.getPublic('hex')

let coin = new BlockChain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here',10);
tx1.signTransaction(myKey)
coin.addTransaction(tx1)



console.log("\nStarting the miner")
coin.minePendingTransactions(myWalletAddress)



console.log("\nBalance of satish is ",coin.getBalanceOfAddress(myWalletAddress))


console.log("is chain valid",coin.isChainValid())