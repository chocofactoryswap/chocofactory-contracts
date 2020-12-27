const MASTER = artifacts.require("KitKatMaster");
module.exports = async function(deployer) {
    const cli = await MASTER.deployed();
    const _allocPoint = '1';
    //const _lpToken = '0x1d05072d22270bde9ae2eb55eeddc5d2753ff27e'; //kitkat
    const _lpToken = '0x39d7f9c08d797a70d37801c8cddec9b65d938359'; //busd
    const _withUpdate = false;
    console.log('address', cli.address);
    const r = await cli.add(_allocPoint, _lpToken, _withUpdate);
    console.log('add', r);
    process.exit(0);
};
