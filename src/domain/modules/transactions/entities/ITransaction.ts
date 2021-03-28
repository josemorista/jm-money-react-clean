export interface ITransaction {
	id: string;
	title: string;
	type: 'outcome' | 'income';
	value: number;
	category: string;
	date: Date | string;
}