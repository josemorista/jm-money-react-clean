import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	:root {
		--background: #f0f2f5;
		--red: #e52e4d;
		--purple: #5429cc;

		--purple-light: #6933ff;

		--text-title: #363f5f;
		--text-body: #969cb3;

		--background: #f0f2f5;
		--shape: #ffffff;

		--green: #33CC95;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		box-shadow: none;
		font-weight: 400;
		&:active,
		&:focus {
			outline: none;
		}
	}

	body {
		background-color: var(--background);
	}

	body,
	input,
	textarea,
	button {
		font-family: 'Poppins', sans-serif;
	}

	strong,
	b,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 600;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}
		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}


	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}

	.react-modal-overlay {
		
		z-index: 100;

		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: rgba(0,0,0, 0.6);

	}

	.react-modal-body {

		position: relative;
		
		width: calc(100% - 2rem);
		max-width: 576px;

		padding: 3rem;

		background-color: var(--background);
		outline: none;

		border-radius: 0.24rem;
	}

`;