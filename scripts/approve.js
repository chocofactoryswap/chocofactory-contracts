const MASTER = artifacts.require("KitKatMaster");
module.exports = async function(deployer) {
    const cli = await MASTER.deployed();
    const _allocPoint = '0';
    const _lpToken = '0x97e38599f5a20694e25b3b9db512cd018f9a675a';
    const _withUpdate = true;
    console.log('address', cli.address);
    const r = await cli.add(_allocPoint, _lpToken, _withUpdate);
    console.log('add', r);
    process.exit(0);
};
