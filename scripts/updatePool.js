const MASTER = artifacts.require("KitKatMaster");
const user = '0xDAF1D6AB3268b4fAf348B470A28951d89629D306';
module.exports = async function() {
    const cli = await MASTER.deployed();
    const pid = '0';
    console.log('KitKatMaster', cli.address);
    await cli.updatePool(pid);
    console.log('updatePool');
    process.exit(0);
};
