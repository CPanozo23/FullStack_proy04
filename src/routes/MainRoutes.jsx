import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from "../pages/Home"
import { Menu } from "../pages/Menu"
import { Reservation } from "../pages/Reservation"
import { Blog } from "../pages/Blog"
import Login from '../pages/Login'
import DashboardAdmin from '../pages/DashboardAdmin'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='reservation' element={<Reservation />} />
      <Route path='blog' element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboardAdmin"
        element={
          localStorage.getItem('user') ? (
            <DashboardAdmin />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  )
}

export default MainRoutes
