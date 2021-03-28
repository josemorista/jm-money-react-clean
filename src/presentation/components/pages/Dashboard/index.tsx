import { FC } from 'react';
import { DashboardStyles } from '../../../styles/components/pages/Dashboard/Dashboard';
import { Summary } from './Summary';
import { TransactionsTable } from './TransactionsTable';

export const Dashboard: FC = () => {
	return <DashboardStyles.Container>
		<Summary />
		<TransactionsTable />
	</DashboardStyles.Container>;
};