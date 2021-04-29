const Test = artifacts.require('Test')

module.exports = function (deployer, network, accounts) {
  // deployment steps
  deployer.deploy(Test)
}
