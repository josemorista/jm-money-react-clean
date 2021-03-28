import 'reflect-metadata';
import './domain/shared/container';
import './fakeServer';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './presentation/App';
import { GlobalStyles } from './presentation/styles/GlobalStyles';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

