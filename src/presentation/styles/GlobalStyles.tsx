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

`;