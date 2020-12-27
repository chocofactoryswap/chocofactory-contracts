const Timelock = artifacts.require("Timelock");
module.exports = function(deployer, network, accounts) {
    const admin_ = accounts[0];
    deployer.deploy(Timelock, admin_);
};