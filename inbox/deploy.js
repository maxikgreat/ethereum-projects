const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const {abiInterface, bytecode} = require('./compile');

let provider = new HDWalletProvider(
    'noodle mansion heart change camp left exotic novel trouble neck orient couple', 
    'https://rinkeby.infura.io/v3/00a344b1cf9a4263ba07de9cfb952566'
);
const web3 = new Web3(provider);

(async () => {

    const accounts = await new web3.eth.getAccounts();

    console.log('Attempting deploy from account...', accounts[0]);

    const result = await new web3.eth.Contract(abiInterface)
        .deploy({data: `0x${bytecode}`, arguments: ['Initial message']})
        .send({from: accounts[0], gas: '2000000'});
    
    console.log('Contract deployed to:', result.options.address);

    provider.engine.stop();
})();