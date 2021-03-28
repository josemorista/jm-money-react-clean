import 'reflect-metadata';
import './domain/shared/container';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './presentation/App';
import { GlobalStyles } from './presentation/styles/GlobalStyles';

import { createServer } from 'miragejs';
import { ITransaction } from './domain/modules/transactions/entities/ITransaction';

createServer({

	routes() {
		this.namespace = 'api';
		this.get('/transactions', () => {
			const transactions: Array<ITransaction> = [
				{
					id: '1',
					type: 'income',
					category: 'Pagamento',
					title: 'Salário',
					value: 5500,
					date: new Date()
				},
				{
					id: '2',
					type: 'outcome',
					category: 'Mercado',
					title: 'Compras',
					value: 227,
					date: new Date()
				},
			];
			return transactions;
		});
	}
});

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

