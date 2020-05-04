const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor
const { abiInterface , bytecode }  = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

const INITIAL_STRING = 'Hi there';

beforeEach(async () => {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // use a one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(abiInterface)
        .deploy({data: bytecode, arguments: [INITIAL_STRING]}) // setup contract
        .send({from: accounts[0], gas: '1000000'}); // deploy contract
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); // if exists
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING)
    })

    it('can change the message', async () => {
        await inbox.methods.setMessage('New message').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'New message');
    })
});