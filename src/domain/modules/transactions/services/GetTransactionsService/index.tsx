import { IHttpClientProvider } from '../../../../shared/providers/HttpClientProvider/models/IHttpClientProvider';
import { ITransaction } from '../../entities/ITransaction';
import { injectable, inject } from 'tsyringe';
import { API_BASE_URL } from '../../../../../consts';

@injectable()
export class GetTransactionsService {
	constructor(
		@inject('HttpClientProvider')
		private httpClientProvider: IHttpClientProvider
	) { }

	async execute(): Promise<Array<ITransaction>> {
		const { data } = await this.httpClientProvider.get<{ transactions: Array<ITransaction> }>({
			url: `${API_BASE_URL}/transactions`
		});
		return data.transactions;
	}
}