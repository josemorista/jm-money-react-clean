import { FC } from 'react';
import { Dashboard } from './components/pages/Dashboard';
import { Header } from './components/shared/Header';

export const App: FC = () => {
	return (
		<div className="App">
			<Header />
			<Dashboard />
		</div>
	);
};

