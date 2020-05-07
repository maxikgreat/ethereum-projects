
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

export const factory = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x45cE9Ae7d685F0A677D543d19aFd807843e3B4a8'
);
