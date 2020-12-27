const TOKEN = artifacts.require("FerreroToken");
const MASTER = artifacts.require("FerreroMaster");
module.exports = async function(deployer, network, accounts) {
    let TokensPerBlock = '100000000000000';
    let startBlock = 3042969;
    let bonusEndBlock = 0;
    if( network == 'testnet' ){
        startBlock = 4360007;
    }
    bonusEndBlock = startBlock + 1000000;
    await deployer.deploy(TOKEN);
    console.log('TOKEN', TOKEN.address);
    const devaddr = accounts[0];
    await deployer.deploy(MASTER, TOKEN.address, devaddr, TokensPerBlock, startBlock, bonusEndBlock);
    console.log('MASTER', MASTER.address);
    const TOKEN_DEPLOYED = await TOKEN.deployed();
    await TOKEN_DEPLOYED.transferOwnership(MASTER.address);

};
