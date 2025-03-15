import type { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import MainLayout from '../components/general/layouts/main/main-layout';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
