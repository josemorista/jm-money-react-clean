import { FC } from 'react';
import { DashboardTransactionsTable } from '../../../../styles/components/pages/Dashboard/TransactionsTable';

export const TransactionsTable: FC = () => {
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
				<tr>
					<td>Pão de forma</td>
					<td className='outcome'>- R$ 6,00</td>
					<td>Mercado</td>
					<td>23/02/2021</td>
				</tr>
				<tr>
					<td>Pão de forma</td>
					<td className='outcome'>- R$ 6,00</td>
					<td>Mercado</td>
					<td>23/02/2021</td>
				</tr>
				<tr>
					<td>Pagamento Juca</td>
					<td className='income'>R$ 100,00</td>
					<td>Dívida</td>
					<td>23/02/2021</td>
				</tr>
			</tbody>
		</table>
	</DashboardTransactionsTable.Container>;
};