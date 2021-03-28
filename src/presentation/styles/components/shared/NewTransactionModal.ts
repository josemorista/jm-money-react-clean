import styled from 'styled-components';

const Container = styled.form`
	
	> * {
		margin-bottom: 1rem;
	}

	button {
		
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.95);
		}
	}

	h2 {
		font-size: 24px;
		margin-bottom: 1rem;
		color: var(--text-title);
	}

	input {
		width: 100%;
		padding: 1.5rem;
		height: 4rem;

		border-radius: 0.25rem;
		background: #E7E9EE;
		border: 1px solid #D7D7D7;

		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}
	}

	.outcome-or-income {
		display: flex;
		
		> button {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;

			height: 4rem;

			border: 1.5px solid #969CB3;
			border-radius: 0.25rem;

			font-size: 1rem;
			color: var(--text-title);

			&+button {
				margin-left: 0.5rem;
			}

			> img {
				margin-right: 0.5rem;
			}
		}
	}

	button[type='submit'] {
		
		width: 100%;
		height: 4rem;

		font-weight: 600;
		font-size: 1rem;

		background-color: var(--green);
		color: var(--shape);
		
		border: 0;
		border-radius: 0.25rem;
	}

`;

export const NewTransactionModalStyles = {
	Container
};