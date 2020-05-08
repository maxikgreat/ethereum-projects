
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

export const factory = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x6d6D5df19a0FeE82924630b0CbCeC23A8D960856'
);
