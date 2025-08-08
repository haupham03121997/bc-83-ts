import type { BaseApiResponse } from '@/interfaces/base.interface';
import type { Banner } from '@/interfaces/movie.interface';
import api from './api';

export const getListBanners = async (): Promise<Banner[] | undefined> => {
  try {
    const response = await api.get<BaseApiResponse<Banner[]>>('QuanLyPhim/LayDanhSachBanner') 
    return response.data.content // danh sách banners
  } catch (error) {
    console.log("Error fetching banners:", error);
  }
}