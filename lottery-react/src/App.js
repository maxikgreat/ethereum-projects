import React, {useEffect, useState} from 'react';
import './App.css';
import {web3} from './web3';
import {lottery} from './lottery';

function App() {

	const [contractState, setContractState] = useState({
		manager: '',
		players: [],
		balance: '',
		value: '',
		message: ''
	});

	useEffect(() => {
		(async () => {
			const manager = await lottery.methods.manager().call();
			const players = await lottery.methods.getPlayers().call();
			const balance = await web3.eth.getBalance(lottery.options.address);
			setContractState({manager, players, balance})
		})();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();

		const accounts = await web3.eth.getAccounts();

		setContractState({
			...contractState,
			message: 'Waiting on transaction success...'
		})

		await lottery.methods.enter().send({
			from: accounts[0],
			value: web3.utils.toWei(contractState.value, 'ether')
		})

		setContractState({
			...contractState,
			message: 'You have been entered!'
		})
	};

	const pickWinner = async () => {
		const accounts = await web3.eth.getAccounts();

		setContractState({
			...contractState,
			message: 'Waiting on transaction success...'
		})

		await lottery.methods.pickWinner().send({
			from: accounts[0]
		})

		setContractState({
			...contractState,
			message: 'Winner has been picked!'
		})
	};
	
	return (
		<div className="App">
			<h1>Lottery Contract</h1>
			<p>
				This contract is managed by {contractState.manager}. <br />
				There are currently {contractState.players.length} people entered, <br/>
				competing to win {web3.utils.fromWei(contractState.balance, 'ether')} ether!
			</p>
			<hr />
			<form onSubmit={(e) => onSubmit(e)}>
				<h3>Want to try your luck?</h3>
				<div>
					<label>Amount of ether to enter</label>
					<input 
						value={contractState.value || ''}
						onChange={event => setContractState({
							...contractState,
							value: event.target.value
						})}
					/>
				</div>
				<button>Enter</button>
			</form>
			<hr />
			<h3>Ready to pick a winner?</h3>
			<button onClick={() => pickWinner()}>Pick a winner</button>
			<hr />
			<h2>{contractState.message}</h2>
		</div>
	);
}

export default App;
