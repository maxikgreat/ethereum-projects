
import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined') {
    web3 = new Web3(window.ethereum);
    window.web3 = web3;
}

module.exports = web3;

