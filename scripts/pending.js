const MASTER = artifacts.require("KtKtMaster");
const user = '0xDAF1D6AB3268b4fAf348B470A28951d89629D306';
module.exports = async function() {
    const cli = await MASTER.deployed();
    const pid = '0';
    console.log('KtKtMaster', cli.address);
    const r = await cli.pendingKtKt(pid, user);
    try{
        const balance = r / 1E18;
        console.log("pendingKtKt", balance);
    }catch(e){
        console.log(e);
    }
    process.exit(0);
};
