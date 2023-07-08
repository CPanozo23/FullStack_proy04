import { Navigate, Route, Routes } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { Reservation } from '../pages/Reservation';
import { Blog } from '../pages/Blog';
import { DashboardAdmin } from '../pages/DashboardAdmin';
//import { ProtectedRoutes } from './ProtectedRoutes';
import { Login } from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../helpers/AuthContext';

export const MainRoutes = () => {
  const { userName, isValidPermissions } = useUser();
  const { permissions } = useContext(AuthContext);

  const hasPermissions = permissions
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboardAdmin"
          element={hasPermissions ? <DashboardAdmin /> : <Navigate to="/" />}
        >
          <Route index element={<DashboardAdmin />} />
        </Route>
      </Routes>
    </div>
  )
}
