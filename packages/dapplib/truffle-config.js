require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note sister pumpkin hunt loan equal gaze'; 
let testAccounts = [
"0x7b6eeb8b0c58ef36a907ce782046b33cbd16c38198fdc7bb984bd2255157853a",
"0xb217ee91fb0f816a56f9e7f5ffc54a478f1258daaa88b1a05c8f47156d6ebda4",
"0x870be2d6e395a0f3eae940e207327f85ee6f5d2412749a127d39af422676f322",
"0xe644f2a7a910da736dcff039ac5acc494a2c228102d654dd7aa9a12cfcd5ce4b",
"0xfa564953bcc97c4579fdd034ad4d9ee2e4ed57694fffc3a328d84ef84313706c",
"0xeee69efbf9902fcb8a55220d1c1cf7ff8ff06e5b74d2e6756a8d2d75a3018486",
"0x7186dbc9264474530b3cb71568ee85115b4265555ca3aba3c35307f907b4462d",
"0x259bd0f66a389ee5260a0a6fdfdf30821803870233fce6cedba8113692537878",
"0x61271ec78d956b65a33f2e70061e9470108ac7e3cdd8de19359c10427495a0bb",
"0x22dfb4aa2ac469286b38f6b10d788520ad0501c441dc93fa4aad08d4ba7b6832"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

