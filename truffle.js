const HDWalletProvider = require("@truffle/hdwallet-provider");
mnemonic=process.env.MNEMONIC
module.exports = {
    networks: {
      development: {
        provider: function() {
            return new HDWalletProvider(mnemonic, process.env.RPC_UPSTREAM);
        },
        network_id: 97 // Match any network id
      }
    }
  };