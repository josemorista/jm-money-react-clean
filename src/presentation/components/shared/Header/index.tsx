import { FC } from 'react';
import logo from '../../../assets/logo.svg';
import { HeaderStyles } from '../../../styles/components/shared/Header';

export const Header: FC = () => {
	return <HeaderStyles.Container>
		<HeaderStyles.Content>
			<img src={logo} alt="Jm-Money" />
			<button>
				Nova transação
			</button>
		</HeaderStyles.Content>
	</HeaderStyles.Container>;
};