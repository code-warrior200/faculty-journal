import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000/api/v1",
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
});

// Response Interceptor (Handle Errors)
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("API Error:", error.message);

    if (error.response) {
      console.error("Response Data:", error.response.data);
      console.error("Response Status:", error.response.status);
    } else if (error.request) {
      console.error("No response received from the server");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
