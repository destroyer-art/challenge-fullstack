import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      toast.error('Credenciais incorretas. Por favor, verifique suas informações.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = '/login';
      }, 5000);
    }
    return Promise.reject(error);
  },
);

export async function GET(endpoint: string, options = {}) {
  try {
    const response = await api.get(endpoint, options);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function POST(endpoint: string, data: any, options = {}) {
  try {
    const response = await api.post(endpoint, data, options);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function PUT(endpoint: string, data: any, options = {}) {
  try {
    const response = await api.put(endpoint, data, options);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
