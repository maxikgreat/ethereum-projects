const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'noodle mansion heart change camp left exotic novel trouble neck orient couple', 
    'https://rinkeby.infura.io/v3/00a344b1cf9a4263ba07de9cfb952566'
);

const web3 = new Web3(provider);

(async () => {
    const accounts = await new web3.eth.getAccounts();

    console.log('Attempting deploy a contract from ', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({data: `0x${compiledFactory.evm.bytecode.object}`}) 
        .send({from: accounts[0], gas: '1000000'});
    
    console.log('Contract deployed to ', result.options.address);
    // 0x6d6D5df19a0FeE82924630b0CbCeC23A8D960856
    // factory address

    provider.engine.stop();
})();