const DevToken = artifacts.require("DevToken");
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the DevToken
  // await deployer.deploy(DevToken);
  await deployer.deploy(DevToken, "DevToken", "DVTK", 18, "50000000000000000000000");
  const devToken = await DevToken.deployed()
};