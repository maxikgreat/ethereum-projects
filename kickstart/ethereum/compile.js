const fs = require('fs-extra');
const path = require('path');
const solc = require('solc');

const contractName = 'Campaign';

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

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
}

const output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath);

const campaignContract = output.contracts[`${contractName}.sol`];

for(let contract in campaignContract) {

    //path throw each nested contract in main contact 'campaign'

    fs.outputJsonSync(
        path.resolve(buildPath, `${contract}.json`),
        campaignContract[contract]
    );
}


