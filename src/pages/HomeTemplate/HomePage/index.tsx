import { getListBanners } from '@/services/movie.api'
import { useAuthStore } from '@/store/auth.store'
import { useThemeStore } from '@/store/theme.store'
import { useQuery } from "@tanstack/react-query"

export default function HomePage() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ["get-banners"],
    queryFn: () => getListBanners()
  })

  const  { user , setUser , clearUser } = useAuthStore((state: any)=> state)
  const { theme , setTheme} = useThemeStore((state: any)=> state)
  console.log('🔥 ~ HomePage ~ theme:', theme)
  console.log('🔥 ~ HomePage ~ user:', user)

  const handleLogin = ()=>{
    const user = { name: 'Hau', age: 18  , accessToken:"xxx"}
    setUser(user)
  }

  const handleLogout  = ()=>{
    clearUser()
  }

  return (
    <div>
      <div>
        <button onClick={()=> setTheme('light')}>Light mode</button>
        <button onClick={()=> setTheme('dark')}>Dark mode</button>
        {user ? <button onClick={handleLogout}>Logout</button> :  <button className='p-3 bg-green-500 text-white rounded-md' onClick={handleLogin}>Login</button>}
       
      </div>
      {data.map((item) => {
        return (
          <div key={item.maBanner}>
            <img src={item.hinhAnh} className='w-screen h-screen'/>
          </div>
        )
      })}
    </div>
  )
}
