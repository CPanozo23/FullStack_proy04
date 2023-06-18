import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { Reservation } from "../pages/Reservation"
import { Blog } from "../pages/Blog"

export const MainRoutes = () => {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='reservation' element={<Reservation />} />
        <Route path='blog' element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}
