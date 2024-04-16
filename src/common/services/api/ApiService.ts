import axios, { Axios, AxiosRequestConfig } from "axios";

export class ApiService {
  private readonly httpClient: Axios;

  constructor(baseUrl: string, apiKey?: string) {
    this.httpClient = axios.create({
      baseURL: baseUrl,
      headers: {
        ...(apiKey && { Authorization: apiKey }),
      },
    });
  }

  public async get<Response>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.get<Response>(url, config);
    return response.data;
  }

  public async post<Response, Payload = undefined>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.post<Response>(url, data, config);
    return response.data;
  }

  public async put<Response, Payload = undefined>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.put<Response>(url, data, config);
    return response.data;
  }

  public async delete<Response>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.delete<Response>(url, config);
    return response.data;
  }

  public async patch<Response, Payload = undefined>(
    url: string,
    data?: Payload,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.patch<Response>(url, data, config);
    return response.data;
  }

  public async head<Response>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.head<Response>(url, config);
    return response.data;
  }

  public async options<Response>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.options<Response>(url, config);
    return response.data;
  }

  public async request<Response>(
    config: AxiosRequestConfig
  ): Promise<Response> {
    const response = await this.httpClient.request<Response>(config);
    return response.data;
  }

  public get httpClientInstance(): Axios {
    return this.httpClient;
  }
}
