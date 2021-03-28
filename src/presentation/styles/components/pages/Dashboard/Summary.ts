import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin-top: -7rem;
`;

const SummaryItem = styled.div`
	display: flex;
	flex: 1;
	
	flex-direction: column;
	justify-content: space-between;
	padding: 1.625rem 2rem;
	margin: 0.5rem;

	height: 8.5rem;
	
	background-color: var(--shape);

	> span {
		
		display: flex;
		justify-content: space-between;
		flex-direction: row;

		> legend {
			color: var(--text-title);
		}
	}

	> h2 {
		color: var(--text-title);
		font-weight: 400;

		> strong {
			font-weight: 600;
			color: inherit;
		}
	}

	&.total {
		background-color: var(--green);
		* { 
			color: var(--shape);
		}
	}

`;

export const DashboardSummaryStyles = {
	Container,
	SummaryItem
};