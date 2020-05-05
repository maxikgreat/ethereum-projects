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

    it('allows one account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });

    it('allows multiple accounts to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length);
    });

    it('requires a minimum amount of ether to enter', async () => {
        try{
            await lottery.methods.enter().send({
                from: accounts[0],
                value: web3.utils.toWei('0.01', 'ether') // must be more than 0.01 !!!!
            })
            assert(false);
        } catch (e) {
            assert(e); // test will be passed if error exist !!!!
        }
    });

    it('only manager can call pickWinner', async () => {
        try{
            await lottery.methods.pickWinner().send({
                from: accounts[1]
            })
            assert(false);
        } catch (e){
            assert(e); // see it before
        }
    });

    it('sends money to the winner and resets players array', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('5', 'ether')
        })

        const initialBalance = await web3.eth.getBalance(accounts[0]);

        await lottery.methods.pickWinner().send({
            from: accounts[0]
        })

        const finalBalance = await web3.eth.getBalance(accounts[0]);
        const difference = finalBalance - initialBalance;

        assert(difference > web3.utils.toWei('1.8', 'ether'));
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });
        assert.equal(0, players.length);
        
        const contractBalance = await web3.eth.getBalance(lottery.options.address);
        assert.equal(contractBalance, 0);
    });
});