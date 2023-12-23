import axios, { AxiosError, AxiosInstance } from 'axios';

const checkResponseError = (error: any) => {
  if (error.response && error.response.status) {
    console.log('Erro de status:', error.response.status);
  } else {
    console.log('Erro na resposta:', error.message);
  }
  return Promise.reject(error);
};

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  checkResponseError
);


export async function GET(endpoint: string, options = {}) {
  try {
    const response = await api.get(endpoint, options);
    return response;
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      checkResponseError((err as AxiosError).response);
    }
    throw err;
  }
}

export async function POST(endpoint: string, data: any, options = {}) {
  try {
    const response = await api.post(endpoint, data, options);
    return response;
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      checkResponseError((err as AxiosError).response);
    }
    throw err;
  }
}

