import { FC } from 'react';
import Modal from 'react-modal';
import { NewTransactionModalStyles } from '../../../styles/components/shared/NewTransactionModal';
import outcomeIcon from '../../../assets/outcome.svg';
import incomeIcon from '../../../assets/income.svg';

interface INewTransactionModalProps {
	isNewTransactionModalOpen: boolean;
	onRequestClose(): void;
}

export const NewTransactionModal: FC<INewTransactionModalProps> = ({ onRequestClose, isNewTransactionModalOpen }) => {
	return <Modal
		isOpen={isNewTransactionModalOpen}
		onRequestClose={onRequestClose}
		overlayClassName="react-modal-overlay"
		className="react-modal-body"
	>
		<NewTransactionModalStyles.Container>
			<h2>Cadastrar transação</h2>
			<input type="text" placeholder="Nome" />
			<input type="number" placeholder="Preço" />
			<section className="outcome-or-income">
				<button>
					<img src={incomeIcon} alt="Entrada" />
					Entrada
				</button>
				<button>
					<img src={outcomeIcon} alt="Saída" />
					Saída
				</button>
			</section>
			<input type="text" placeholder="Categoria" />
			<button type="submit">
				Cadastrar
			</button>
		</NewTransactionModalStyles.Container>
	</Modal>;
};