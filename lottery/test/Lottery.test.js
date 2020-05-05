const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {abiInterface, bytecode} = require('../compile');

const web3 = new Web3(ganache.provider());

let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(abiInterface)
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Lottery', () => {

    it('deploys a contract', () => {
        assert.ok(lottery.options.address) // if exist
    });

});