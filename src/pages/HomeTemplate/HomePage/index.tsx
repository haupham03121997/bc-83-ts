import { Button } from '@/components/ui/button'
import { getListBanners } from '@/services/movie.api'
import { useAuthStore } from '@/store/auth.store'
import { useThemeStore } from '@/store/theme.store'
import { useQuery } from "@tanstack/react-query"

export default function HomePage() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["get-banners"],
    queryFn: () => getListBanners()
  })

  const { user, setUser, clearUser } = useAuthStore()
  const { theme, setTheme } = useThemeStore((state: any) => state)
  console.log('🔥 ~ HomePage ~ theme:', theme)
  console.log('🔥 ~ HomePage ~ user:', user)

  const handleLogin = () => {

  }

  const handleLogout = () => {
    clearUser()
  }

  return (
    <div>
      <header className='bg-gray-400 w-full flex items-center justify-between p-4'>
        <h1>Logo</h1>
        <div className='flex items-center gap-2'>
          {user ? <>
            <h2>{user.hoTen}</h2>
            <Button variant="outline" onClick={handleLogout}>
              Logout out
            </Button>
          </> : <Button> Đăng nhập</Button>}

        </div>
      </header>
      <div>
        <button onClick={() => setTheme('light')}>Light mode</button>
        <button onClick={() => setTheme('dark')}>Dark mode</button>
        {user ? <button onClick={handleLogout}>Logout</button> : <button className='p-3 bg-green-500 text-white rounded-md' onClick={handleLogin}>Login</button>}

      </div>
      {data.map((item) => {
        return (
          <div key={item.maBanner}>
            <img src={item.hinhAnh} className='w-screen h-screen' />
          </div>
        )
      })}
    </div>
  )
}
