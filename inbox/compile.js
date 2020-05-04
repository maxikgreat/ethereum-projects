const path = require('path');
const solc = require('solc');
const fs = require('fs');

const contractName = "Inbox";

const source = fs.readFileSync(path.resolve(__dirname, 'contracts', `${contractName}.sol`), 'utf8');

var input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
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

const abiInterface = output.contracts[`${contractName}.sol`][`${contractName}`].abi;
const bytecode = output.contracts[`${contractName}.sol`][`${contractName}`].evm.bytecode.object;

module.exports = {abiInterface, bytecode}