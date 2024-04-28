import axios, { AxiosRequestConfig } from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class APIClient<T> {
  constructor(private readonly endpoint: string) {}

  getAll = async (config: AxiosRequestConfig) => {
    return await axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
