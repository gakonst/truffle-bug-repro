const mnemonicPhrase = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    local: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: {
            phrase: mnemonicPhrase
          },
          providerOrUrl: 'http://127.0.0.1:8545',
          // chainId: 1337,
        })
      },
      host: '127.0.0.1',
      port: 8545,
      gasPrice: 0,
      // evmVersion: 'istanbul',
      network_id: "*",
    }
  },
  compilers: {
     solc: {
       version: "0.7.6",
     }
  }
}

