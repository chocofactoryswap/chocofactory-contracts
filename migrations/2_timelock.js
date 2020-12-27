const Timelock = artifacts.require("Timelock");
module.exports = function(deployer, network, accounts) {
    const admin_ = accounts[0];
    const delay_ = 172800;
    deployer.deploy(Timelock, admin_, delay_);
};