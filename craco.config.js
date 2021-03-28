// craco.config.js
module.exports = function ({ env: _env }) {
	return {
		babel: {
			'plugins': [
				'babel-plugin-transform-typescript-metadata',
				['@babel/plugin-proposal-decorators', { 'legacy': true }]
			]
		},
	};
};