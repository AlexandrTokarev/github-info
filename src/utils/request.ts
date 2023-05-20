import axios, { AxiosRequestConfig } from 'axios';

interface Response<T> {
  data: T | null;
  status: number;
  error: string | null;
}

function formatError(error: any): Response<null> {
  return {
    data: null,
    status: error.response ? error.response.status : 500,
    error: error.message || 'An error occurred',
  };
}

export const request = async <T>(config: AxiosRequestConfig): Promise<Response<T>> => {
  try {
    const response = await axios(config);

    return {
      data: response.data,
      status: response.status,
      error: null,
    };
  } catch (error) {
    return formatError(error) as Response<T>;
  }
};
