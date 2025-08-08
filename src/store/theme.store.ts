import { create } from 'zustand';
// export const useAuthStore = create(()=>)

export const useThemeStore = create((set) => ({
  theme: 'light',
  setTheme: (theme: string) => set({ theme }),
}))