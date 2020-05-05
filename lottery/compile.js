const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractName = 'Lottery';

const source = fs.readFileSync(path.resolve(__dirname, 'contracts', `${contractName}.sol`), 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        [`${contractName}.sol`]: {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};


const output = JSON.parse(solc.compile(JSON.stringify(input)));

const abiInterface = output.contracts[`${contractName}.sol`][contractName].abi;
const bytecode = output.contracts[`${contractName}.sol`][contractName].evm.bytecode.object;

module.exports = {abiInterface, bytecode};