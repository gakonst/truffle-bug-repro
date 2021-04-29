# Truffle Invalid Sender Bug

It seems like using Truffle with `geth --dev --rpc` is not supported. Steps:

```
yarn
yarn geth
# in another terminal
yarn repro
```

## Bug 1: Invalid Sender

```
1_deploy_ERC20_contract.js
==========================

   Deploying 'Test'
   ----------------

Error:  *** Deployment Failed ***

"Test" -- invalid sender.
```


## Bug 2: Chain Id not supported.

If you uncomment the `chainId: 1337` line in `truffle-config`, you'll get the following error:

```
1_deploy_ERC20_contract.js
==========================

   Deploying 'Test'
   ----------------
Error: Chain with ID 1337 not supported
```
