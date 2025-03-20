import type { FC } from 'react';

import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const MainLayout = lazy(() => import('../components/general/layouts/main/main-layout'));
const Login = lazy(() => import('./login/login'));
const Profile = lazy(() => import('./profile/profile'));
const MealBooking = lazy(() => import('./meal-booking/meal-booking'));
const UserManagement = lazy(() => import('./user-management/user-management'));
const ShoppingCart = lazy(() => import('./shopping-cart/shopping-cart'));

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MealBooking />} />
          <Route element={<UserManagement />} path="users" />
          <Route element={<ShoppingCart />} path="shopping-cart" />
        </Route>

        <Route element={<Login />} path="login" />
        <Route element={<Profile />} path="profile" />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
