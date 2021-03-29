const intlCurrencyFormatter = new Intl.NumberFormat([], {
	style: 'currency',
	currency: 'BRL'
});

export const currencyFormatter = (value: number) => {
	return intlCurrencyFormatter.format(value);
};
