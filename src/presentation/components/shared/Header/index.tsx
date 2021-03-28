import { FC } from 'react';
import logo from '../../../assets/logo.svg';
import { HeaderStyles } from '../../../styles/components/shared/Header';

interface IHeaderProps {
	onNewTransactionButtonClick(): void;
}

export const Header: FC<IHeaderProps> = ({ onNewTransactionButtonClick }) => {

	return <HeaderStyles.Container>
		<HeaderStyles.Content>
			<img src={logo} alt="Jm-Money" />
			<button onClick={onNewTransactionButtonClick}>
				Nova transação
			</button>
		</HeaderStyles.Content>

	</HeaderStyles.Container>;
};