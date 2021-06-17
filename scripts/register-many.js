// Usage: npx truffle exec --network mainnet scripts/register-many.js "a()" "b(uint256)" ...

const getNonce = () => new Promise((resolve, reject) => {
  web3.eth.getAccounts((err, accounts) => {
    if (err) { reject(err) }
    web3.eth.getTransactionCount(accounts[0], (err, nonce) => {
      if (err) { reject(err) }
      resolve(nonce)
    })
  })
})

module.exports = async (callback) => {
  const sigs = process.argv.slice(4)
  const SignatureReg = artifacts.require('SignatureReg')
  const reg = SignatureReg.at(process.env.ADDRESS_SIGNATUREREG)

  const register = async (sig, nonce) => {
    console.log('registering', sig, 'nonce', nonce)
    await reg.register(sig, { gas: 2e5, nonce })
    console.log('registered', sig)
  }

  const initialNonce = await getNonce()
  sigs.forEach((sig, i) => register(sig, initialNonce + i))
}