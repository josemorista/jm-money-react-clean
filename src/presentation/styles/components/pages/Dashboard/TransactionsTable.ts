import styled from 'styled-components';

const Container = styled.section`
	margin-top: 4rem;

	table {
		width: 100%;
		border-spacing: 0 0.5rem;

		th {
			color: var(--text-body);
			font-weight: 400;
			padding: 1rem 2rem;
			text-align: left;
			line-height: 1.5rem;
		}

		td {
			padding: 1rem 2rem;
			border: none;
			background-color: var(--shape);
			color: var(--text-body);

			&:first-of-type {
				color: var(--text-title);
			}

			&.income {
				color: var(--green);
			}

			&.outcome {
				color: var(--red);
			}
		}
	}
`;

export const DashboardTransactionsTable = {
	Container
};