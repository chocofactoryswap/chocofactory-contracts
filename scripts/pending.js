const MASTER = artifacts.require("KitKatMaster");
const user = '0xDAF1D6AB3268b4fAf348B470A28951d89629D306';
module.exports = async function() {
    const cli = await MASTER.deployed();
    const pid = '0';
    console.log('KitKatMaster', cli.address);
    const r = await cli.pendingKitKat(pid, user);
    try{
        const balance = r / 1E18;
        console.log("pendingKitKat", balance);
    }catch(e){
        console.log(e);
    }
    process.exit(0);
};
