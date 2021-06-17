const HDWalletProvider = require("@truffle/hdwallet-provider");
mnemonic=process.env.MNEMONIC
module.exports = {
    networks: {
      development: {
        provider: function() {
            return new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545/");
        },
        network_id: 97 // Match any network id
      }
    }
  };