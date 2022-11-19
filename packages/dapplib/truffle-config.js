require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth office coast hunt kitchen olympic general'; 
let testAccounts = [
"0xce6ecf9efdbc975d73e33ea4ed355f54c0430e139d2cc73e5c1d0cd01c9e7f75",
"0x2f87ec23acdb1baecd9f9834df9edef46d0fcf47cb1a9ae61b1bec485a17e75e",
"0x74c401d626199305d8f903a46fe2b173516ed5719eb9b07f0fb3cca31a2279bf",
"0x06665893a185f83b09acae854c38191a917882e1c37416a9c4c19618b04fdcaa",
"0x16988df1b382e5ea2194ddaf273ae12ac6ec11567734125822e72729dc1306d9",
"0x5790f93c34bf18123d1988707f6002b79c8375644871d2c40f58a7cb8d9b8082",
"0xbd84cb7e1728a3b8ca0a5a16ce26c669d95063bb26640a0dc95e6c7290b9671a",
"0x594c9b0ecee08ff5108d5a623b51c68c623be691f5d692d91102ac8b394dc04c",
"0x3e8c04936f399538b03ec219e86b3c96e7772879e8b94863673480444ba8218f",
"0xf23d2ea5cc070f233c58e70edc8d8a3494212db33600f203011239983644443d"
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

