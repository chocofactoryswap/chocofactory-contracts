const MASTER = artifacts.require("KtKtMaster");
const user = '0xDAF1D6AB3268b4fAf348B470A28951d89629D306';
function toN(bn){
    if( ! bn ) return '-';
    let n = bn.toNumber();
    return n / 1E18;
}
module.exports = async function() {
    const cli = await MASTER.deployed();
    const pid = '0';
    console.log('KtKtMaster', cli.address);
    const r = await cli.poolInfoByPid(pid);
    let allocPoint = toN(r._allocPoint);
    let lastRewardBlock = r._lastRewardBlock.toNumber();
    let accKtKtPerShare = toN(r._accKtKtPerShare);
    console.log('lastRewardBlock', lastRewardBlock);
    console.log('accKtKtPerShare', accKtKtPerShare);
    process.exit(0);
};
