const TOKEN = artifacts.require("MMSToken");
const MASTER = artifacts.require("MMSMaster");
module.exports = async function(deployer, network, accounts) {
    let TokensPerBlock = '100000000000000';
    let startBlock = 3473183;
    let bonusEndBlock = 0;
    const blocks_per_day = 28760; // ~
    if( network == 'testnet' ){
        startBlock = 4360007;
    }
    bonusEndBlock = startBlock + (blocks_per_day*30);
    await deployer.deploy(TOKEN);
    console.log('TOKEN', TOKEN.address);
    const devaddr = accounts[0];
    await deployer.deploy(MASTER, TOKEN.address, devaddr, TokensPerBlock, startBlock, bonusEndBlock);
    console.log('MASTER', MASTER.address);
    const TOKEN_DEPLOYED = await TOKEN.deployed();
    await TOKEN_DEPLOYED.transferOwnership(MASTER.address);

};
