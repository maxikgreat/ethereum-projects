import Web3 from 'web3';

window.web3 = new Web3(window.ethereum);

export const web3 = window.web3;
