
import type { CurrentUser } from '@/interfaces/auth.interface';
import axios, { type AxiosInstance } from "axios";
const api : AxiosInstance = axios.create({
 baseURL: import.meta.env.VITE_API_URL,
 timeout: 30000, // 30 seconds
})

// Interceptors
api.interceptors.request.use((config:any)  => {
  const userLocal: string | null = localStorage.getItem("user");
  const userParsed : CurrentUser | null  = userLocal ? JSON.parse(userLocal) : null;
  const accessToken = userParsed ? userParsed.accessToken : null;
  return {
    ...config,
    headers: {
      TokenCybersoft:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MyIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc2ODY5NDQwMDAwMCIsIm5iZiI6MTc0MTg4ODgwMCwiZXhwIjoxNzY4ODQ1NjAwfQ.rosAjjMuXSBmnsEQ7BQi1qmo6eVOf1g8zhTZZg6WSx4',
      Authorization: accessToken ? `Bearer ${accessToken}` : ""
    },
  };
});

export default api;