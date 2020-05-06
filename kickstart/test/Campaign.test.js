const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

const web3 = new Web3(ganache.provider());

let accounts; // ganache accounts
let factory; // factory contract instance
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({data: compiledFactory.evm.bytecode.object})
        .send({from: accounts[0], gas: '1000000'})

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    })

    const addresses = await factory.methods.getDeployedCampaigns().call({from: accounts[0]});
    campaignAddress = addresses[0];
    campaign = await new web3.eth.Contract(
        compiledCampaign.abi,
        campaignAddress
    )
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        console.log(factory.options.address);
        console.log(campaign.options.address);
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })
});
