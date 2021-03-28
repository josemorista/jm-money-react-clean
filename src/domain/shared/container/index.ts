import { container } from 'tsyringe';
import { AxiosHttpClientProvider } from '../providers/HttpClientProvider/implementations/AxiosHttpClientProvider';
import { IHttpClientProvider } from '../providers/HttpClientProvider/models/IHttpClientProvider';

container.registerSingleton<IHttpClientProvider>('HttpClientProvider', AxiosHttpClientProvider);
