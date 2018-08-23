# Nuxt Truffle starter template

## Heavily opinionated template for Ðapp development utilizing [Truffle](https://truffleframework.com/) and [Nuxt](https://nuxtjs.org/)

> Based on a work by [Paperchain](https://github.com/Paperchain/nuxt-box) which in turn is based on work by [pyyding](https://github.com/pyyding), [Daniel Okwufulueze](https://github.com/DOkwufulueze)  and [ConsenSys](https://github.com/ConsenSys) (and probably many others).

### _The template holds a basic implementation of ERC20 compliant token. Use it as a starting point for your Ðapp and modify accroding to your needs_

## Instructions for the starter template


1. Run [Ganache](https://truffleframework.com/ganache).

2. Install Metamask.

     In settings, change network to `Custom RPC`.

     In the box titled "New RPC URL" enter http://127.0.0.1:7545 and click Save.

     Import account from Ganache to metamask - Use the private key of one of the accounts which is given to you by Ganache.

     Now you have account with 100ETH to play with.

3. ```
    truffle compile && truffle migrate --reset
    ```

    Look for the output of the migration, and search for the EIP20 address.
    Something like:
    > `EIP20: 0x28635d5492f6f249d9957d0f0995c210274b8a1e`

    in the store `eip20.js` replace `const tokenAddress = "<address-here>";` with the appropriate address.

4. ```
   npm install
   ```

5. ```
   npm run dev
   ```

6. Open `localhost:3000` in your browser

Enjoy.

_Usefull truffle console commands to interact with the contract on the terminal:_
```
# Run truffle in development mode
truffle console --network development

# Get Ether Balance of account
web3.fromWei(web3.eth.getBalance('<account-address>'), 'ether').toString()

# Point to your contract
contract = <contract-name>.at('contract-address')
# e.g:
contract = EIP20.at('0x28635D5492F6f249d9957d0f0995c210274B8A1e')

# Get Token Balance of account
contract = <contract-name>.at('<contract-address>').balanceOf('<account-address>').then(function(res) { console.log(res.toString()) })
```