import React, {useEffect, useState} from 'react';
import './App.css';
import {web3} from './web3';
import {lottery} from './lottery';

function App() {

	const [manager, setManager] = useState('');

	useEffect(() => {
		(async () => {
			const manager = await lottery.methods.manager().call();
			setManager(manager);
		})();
	}, []);
	
	return (
		<div className="App">
			<h1>Lottery Contract</h1>
			<p>This contract is managed by {manager}</p>
		</div>
	);
}

export default App;
