import styled from 'styled-components';

const Container = styled.header`
	background-color: var(--purple);
`;

const Content = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	
	max-width: 1120px;
	margin: 0 auto;

	padding: 2rem 1rem 10rem;

	button {
		
		padding: 0 2rem;
		height: 3rem;

		border: 0;
		border-radius: 0.2rem;

		color: var(--background);
		background-color: var(--purple-light);

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.95);
		}
	}
`;

export const HeaderStyles = {
	Container,
	Content
};
