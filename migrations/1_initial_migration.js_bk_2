const HelloSmartContract = artifacts.require("HelloSmartContract");
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the DevToken
  await deployer.deploy(HelloSmartContract);
  const helloSmartContract = await HelloSmartContract.deployed()
};