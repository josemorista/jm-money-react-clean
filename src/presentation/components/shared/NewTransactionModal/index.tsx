import React, { FC, useCallback, useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModalStyles } from '../../../styles/components/shared/NewTransactionModal';
import outcomeIcon from '../../../assets/outcome.svg';
import incomeIcon from '../../../assets/income.svg';
import { ITransaction } from '../../../../domain/modules/transactions/entities/ITransaction';

interface INewTransactionModalProps {
	isNewTransactionModalOpen: boolean;
	onRequestClose(): void;
}

type INewTransaction = Omit<ITransaction, 'id' | 'date'>;

export const NewTransactionModal: FC<INewTransactionModalProps> = ({ onRequestClose, isNewTransactionModalOpen }) => {

	const [transaction, setTransaction] = useState<INewTransaction>({
		title: '',
		category: '',
		type: 'income',
		value: 0
	});

	const hanleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTransaction(values => ({ ...values, [name]: value }));
	}, []);

	const changeTransactionType = useCallback((type: ITransaction['type']) => {
		setTransaction(values => ({ ...values, type }));
	}, []);

	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault();
		console.table(transaction);
	}, [transaction]);

	return <Modal
		isOpen={isNewTransactionModalOpen}
		onRequestClose={onRequestClose}
		overlayClassName="react-modal-overlay"
		className="react-modal-body"
	>
		<NewTransactionModalStyles.Container onSubmit={handleSubmit}>
			<h2>Cadastrar transação</h2>
			<input type="text" placeholder="Nome" name='title' onChange={hanleInputChange} />
			<input type="number" placeholder="Preço" name='value' onChange={hanleInputChange} />
			<NewTransactionModalStyles.OutComeOrIncome>
				<button type='button' className={transaction.type === 'income' ? 'selected' : ''} onClick={() => {
					changeTransactionType('income');
				}}>
					<img src={incomeIcon} alt="Entrada" />
					Entrada
				</button>
				<button type='button' className={transaction.type === 'outcome' ? 'selected' : ''} onClick={() => {
					changeTransactionType('outcome');
				}}>
					<img src={outcomeIcon} alt="Saída" />
					Saída
				</button>
			</NewTransactionModalStyles.OutComeOrIncome>
			<input type="text" placeholder="Categoria" name='category' onChange={hanleInputChange} />
			<button type="submit">
				Cadastrar
			</button>
		</NewTransactionModalStyles.Container>
	</Modal>;
};