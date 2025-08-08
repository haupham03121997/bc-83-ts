import { Outlet } from "react-router-dom"

export default function AuthTemplate() {
  return (
    <div>
      <h1>Header Của AuthTemplate</h1>
      <Outlet/>
      <footer>
        <p>Footer Của AuthTemplate</p>
      </footer>
      </div>
  )
}
