interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

const axiosConfig: ApiConfig = {
  baseURL: process.env.EXPO_PUBLIC_LOCAL_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const expoConfig: ApiConfig = {
  baseURL: process.env.EXPO_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getApiConfig = (useExpo: boolean): ApiConfig => {
  return useExpo ? expoConfig : axiosConfig;
};
