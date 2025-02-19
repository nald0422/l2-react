import axios from 'axios';
import { getApiConfig } from '../config/apiConfig';

class ApiService {
  private instance: any;
  private useExpo: boolean;

  constructor(useExpo = false) {
    this.useExpo = useExpo;
    this.instance = axios.create(getApiConfig(this.useExpo));
    
    this.instance.interceptors.request.use(
      (config: any) => {
        // Add auth token or other headers here
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        // Handle global error responses
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: any): Promise<T> {
    if (this.useExpo) {
      return this.expoFetch('GET', url, params);
    }
    return this.instance.get(url, { params });
  }

  public async post<T>(url: string, data?: any): Promise<T> {
    if (this.useExpo) {
      return this.expoFetch('POST', url, data);
    }
    return this.instance.post(url, data);
  }

  private async expoFetch<T>(method: string, url: string, data?: any): Promise<T> {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export default new ApiService();
