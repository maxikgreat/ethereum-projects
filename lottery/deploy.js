const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {abiInterface, bytecode} = require('./compile');

const provider = HDWalletProvider(
    'noodle mansion heart change camp left exotic novel trouble neck orient couple', 
    'https://rinkeby.infura.io/v3/00a344b1cf9a4263ba07de9cfb952566'
);

const web3 = new Web3(provider);

(async () => {
    const accounts = await web3.eth.getAcccounts();

    console.log('Attempting deploy a contract from ', accounts[0]);

    const result = await new web3.eth.Contract(abiInterface)
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ', result.options.address);

    provider.engine.stop();
})();