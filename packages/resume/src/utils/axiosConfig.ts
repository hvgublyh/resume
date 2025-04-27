import axios, { AxiosError, AxiosResponse } from "axios";

const HTTP_STATUS = {
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
  UNAUTHORIZED: 401
};
type RESPONSE_DATA = boolean | null | number | object | string;

// Create a custom Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "/api", // Default API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth token here from localStorage or redux state
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  () => {
    // Handle request errors
  },
);
// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Return only the data part of the response
    return response.data as AxiosResponse<RESPONSE_DATA>;
  },
  (error: AxiosError) => {
    // Handle global error responses (e.g., 401, 403, 500)
    if (error.name) {
      // Handle specific HTTP status codes
      switch (error.response?.status) {
        case HTTP_STATUS.FORBIDDEN:
          // Forbidden
          console.warn("Access forbidden");
          break;
        case HTTP_STATUS.SERVER_ERROR:
          // Server error
          console.warn("Server error");
          break;
        case HTTP_STATUS.UNAUTHORIZED:
          // Unauthorized - redirect to login or refresh token
          console.warn("Unauthorized access");
          // Example: store.dispatch({ type: 'logout' });
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
