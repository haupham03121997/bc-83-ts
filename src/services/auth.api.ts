import type { CurrentUser } from '@/interfaces/auth.interface';
import type { BaseApiResponse } from '@/interfaces/base.interface';
import api from './api';

type LoginDataRequest = {
  taiKhoan: string;
  matKhau: string;
}
type ResponseLogin = BaseApiResponse<CurrentUser>;

export const loginApi = async (data: LoginDataRequest) =>{
  try {
    const response = await api.post<BaseApiResponse<CurrentUser>>("/QuanLyNguoiDung/DangNhap" , data)
    return response.data.content
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}