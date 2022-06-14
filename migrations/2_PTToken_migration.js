// Help Truffle find `PTToken.sol` in the `/contracts` directory
const PTToken = artifacts.require("PTToken");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(PTToken, 1000000);
};