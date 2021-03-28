import { FC, useState } from 'react';
import { Dashboard } from './components/pages/Dashboard';
import { Header } from './components/shared/Header';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/shared/NewTransactionModal';

Modal.setAppElement('#root');

export const App: FC = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	return (
		<div className="App">
			<Header onNewTransactionButtonClick={() => {
				setIsNewTransactionModalOpen(true);
			}} />
			<Dashboard />
			<NewTransactionModal isNewTransactionModalOpen={isNewTransactionModalOpen} onRequestClose={() => {
				setIsNewTransactionModalOpen(false);
			}} />
		</div>
	);
};

