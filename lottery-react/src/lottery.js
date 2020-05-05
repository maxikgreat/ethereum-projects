import web3 from "./web3";

const address = "0x1c9e5BAB1Ce01dde100a724eF0eD218d73A2CD73";

const abi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        inputs: [],
        name: "enter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getPlayers",
        outputs: [[Object]],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "manager",
        outputs: [[Object]],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pickWinner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [[Object]],
        name: "players",
        outputs: [[Object]],
        stateMutability: "view",
        type: "function",
    },
];

export const lottery = new web3.eth.Contract(abi, address);