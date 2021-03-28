
export interface IHttpMethodDTO {
	url: string;
	body?: unknown;
	params?: Record<string, unknown>;
	headers?: Record<string, unknown>;
}

export type IGetOrDeleteMethodDTO = Omit<IHttpMethodDTO, 'body'>;

export interface IHttpClientProvider {
	post<Response>(data: IHttpMethodDTO): Promise<{ data: Response, status: number }>;
	get<Response>(data: IGetOrDeleteMethodDTO): Promise<{ data: Response, status: number }>;
	put<Response>(data: IHttpMethodDTO): Promise<{ data: Response, status: number }>;
	patch<Response>(data: IHttpMethodDTO): Promise<{ data: Response, status: number }>;
	delete<Response>(data: IGetOrDeleteMethodDTO): Promise<{ data: Response, status: number }>;
}