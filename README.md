# signature-registry

[![Build Status][travis-image]][travis-url]
[![Solidity Coverage Status][coveralls-image]][coveralls-url]

[travis-image]: https://travis-ci.org/parity-contracts/signature-registry.svg?branch=master
[travis-url]: https://travis-ci.org/parity-contracts/signature-registry
[coveralls-image]: https://coveralls.io/repos/github/parity-contracts/signature-registry/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/parity-contracts/signature-registry?branch=master

Decentralized registry of 4-bytes signatures to method mappings

## Deployments

- BSC mainnet: [`add address`](Add link)

## Requirements

node version 10

```
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bashrc
nvm install 10
nvm use --delete-prefix 10
```

## Getting started

This project uses the [Truffle](http://truffleframework.com/) framework. To install the required
dependencies run:

```
yarn install
```

To run the test suite:

```
yarn test
```

To deploy

```
export RPC_UPSTREAM=<http node address>
export MNEMONIC=<mnemonic>
yarn migrate
```

## Usage

A truffle script can be used to register many function signatures to the mainnet registry:
```
export ADDRESS_SIGNATUREREG=<contract address>

npx truffle exec scripts/register-many.js "add(uint256,address,bool)" "addStage(uint256,uint256,uint256,uint256)" "deposit(uint256,uint256)" "emergencyWithdraw(uint256)" "massUpdatePools()" "migrate(uint256)" "renounceOwnership()" "set(uint256,uint256,bool)" "setDevAddr(address)" "setDevFee(uint256)" "setMigrator(address)" "transferOwnership(address)" "updatePool(uint256)" "withdraw(uint256,uint256)"
```