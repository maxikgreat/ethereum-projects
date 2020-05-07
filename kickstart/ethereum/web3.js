
import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // we are in browser and user have metamask
    web3 = new Web3(window.ethereum);
    window.web3 = web3;
} else {
    //we are on the server OR user haven't metamask or etc.
    const provider = new Web3.providers.WebsocketProvider(
        'wss://rinkeby.infura.io/ws/v3/00a344b1cf9a4263ba07de9cfb952566'
    );
    web3 = new Web3(provider);
}

export default web3;
