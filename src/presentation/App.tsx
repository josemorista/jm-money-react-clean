import { FC, useState } from 'react';
import { Dashboard } from './components/pages/Dashboard';
import { Header } from './components/shared/Header';
import Modal from 'react-modal';

Modal.setAppElement('root');

export const App: FC = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	return (
		<div className="App">
			<Header onNewTransactionButtonClick={() => {
				setIsNewTransactionModalOpen(true);
			}} />
			<Dashboard />
			<Modal isOpen={isNewTransactionModalOpen}
				onRequestClose={() => {
					setIsNewTransactionModalOpen(false);
				}}>
				<h1>Cadastrar transação</h1>
			</Modal>
		</div>
	);
};

