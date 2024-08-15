import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className="flex">
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout