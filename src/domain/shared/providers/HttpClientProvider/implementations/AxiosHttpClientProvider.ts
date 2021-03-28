import { IGetOrDeleteMethodDTO, IHttpClientProvider, IHttpMethodDTO } from '../models/IHttpClientProvider';
import axios, { AxiosInstance } from 'axios';
import { AppError } from '../../../errors/AppError';


export class AxiosHttpClientProvider implements IHttpClientProvider {

	private api: AxiosInstance;

	constructor() {
		this.api = axios.create();
	}

	async post<Response>({ url, body, params, headers }: IHttpMethodDTO): Promise<{ data: Response; status: number; }> {
		try {
			const { data, status } = await this.api.post(url, (body || {}), {
				params,
				headers
			});
			return { data, status };
		} catch (error) {
			if (error.response) {
				throw new AppError(error.response.data.error, error.response.status);
			}
			throw error;
		}
	}

	async get<Response>({ params, url, headers }: IGetOrDeleteMethodDTO): Promise<{ data: Response; status: number; }> {
		try {
			const { data, status } = await this.api.get(url, {
				params,
				headers
			});
			return { data, status };
		} catch (error) {
			if (error.response) {
				throw new AppError(error.response.data.error, error.response.status);
			}
			throw error;
		}
	}

	async put<Response>({ url, body, params, headers }: IHttpMethodDTO): Promise<{ data: Response; status: number; }> {
		try {
			const { data, status } = await this.api.put(url, (body || {}), {
				params,
				headers
			});
			return { data, status };
		} catch (error) {
			if (error.response) {
				throw new AppError(error.response.data.error, error.response.status);
			}
			throw error;
		}
	}

	async patch<Response>({ url, body, params, headers }: IHttpMethodDTO): Promise<{ data: Response; status: number; }> {
		try {
			const { data, status } = await this.api.patch(url, (body || {}), {
				params,
				headers
			});
			return { data, status };
		} catch (error) {
			if (error.response) {
				throw new AppError(error.response.data.error, error.response.status);
			}
			throw error;
		}
	}

	async delete<Response>({ url, params, headers }: IGetOrDeleteMethodDTO): Promise<{ data: Response; status: number; }> {
		try {
			const { data, status } = await this.api.delete(url, {
				params,
				headers
			});
			return { data, status };
		} catch (error) {
			if (error.response) {
				throw new AppError(error.response.data.error, error.response.status);
			}
			throw error;
		}
	}

}