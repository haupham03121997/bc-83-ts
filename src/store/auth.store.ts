import { create } from 'zustand';
// export const useAuthStore = create(()=>)

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  clearUser: () => set({ user: null }),
}))