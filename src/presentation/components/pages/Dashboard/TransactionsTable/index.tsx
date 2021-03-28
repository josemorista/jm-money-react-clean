import { FC, useEffect, useState } from 'react';
import { container } from 'tsyringe';
import { ITransaction } from '../../../../../domain/modules/transactions/entities/ITransaction';
import { GetTransactionsService } from '../../../../../domain/modules/transactions/services/GetTransactionsService';
import { DashboardTransactionsTable } from '../../../../styles/components/pages/Dashboard/TransactionsTable';
import { format } from 'date-fns';
import { currencyFormatter } from '../../../../utils/currencyFormatter';

const getTransactionsService = container.resolve(GetTransactionsService);

interface IPresentationTransaction extends ITransaction {
	formattedPrice: string;
	formattedDate: string;
}

export const TransactionsTable: FC = () => {

	const [transactions, setTransactions] = useState<Array<IPresentationTransaction>>([]);

	useEffect(() => {
		getTransactionsService.execute().then(fetchedTransactions => {
			setTransactions(fetchedTransactions.map(transaction => ({
				...transaction,
				formattedPrice: (transaction.type === 'outcome' ? '-' : '') + currencyFormatter(transaction.value),
				formattedDate: format(new Date(transaction.date), 'dd/MM/yyyy')
			})));
		});
	}, []);

	return <DashboardTransactionsTable.Container>
		<table>
			<thead>
				<tr>
					<th>Título</th>
					<th>Valor</th>
					<th>Categoria</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map(transaction => (
					<tr key={transaction.id}>
						<td>{transaction.title}</td>
						<td className={transaction.type}>{transaction.formattedPrice}</td>
						<td>{transaction.category}</td>
						<td>{transaction.formattedDate}</td>
					</tr>
				))}
			</tbody>
		</table>
	</DashboardTransactionsTable.Container>;
};