const EIP20 = artifacts.require("./EIP20.sol");

module.exports = deployer => {
  deployer.deploy(EIP20, 10000, "Yotam Token", 1, "YKT");
};
