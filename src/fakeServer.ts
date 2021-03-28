import { createServer, Model } from 'miragejs';
import { v4 as uuid } from 'uuid';

createServer({
	models: {
		transaction: Model
	},
	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: uuid(),
					title: 'Exemplo de titulo',
					value: 5500,
					type: 'income',
					category: 'Exemplo de categoria',
					date: new Date()
				}
			]
		});
	},
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const body = JSON.parse(request.requestBody);
			return schema.create('transaction', {
				id: uuid(),
				...body
			});
		});
	}
});
