import type { FC } from 'react';

import { Outlet } from 'react-router';

import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

const MainLayout: FC = () => {
  return (
    <div dir="rtl" className="grid h-screen w-full grid-cols-4">
      <aside className="col-span-1 ">
        <Sidebar />
      </aside>

      <div className="col-span-3 grid grid-rows-[auto_1fr_auto]">
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="bg-purple-700 p-2 text-center text-gray-100">footer</footer>
      </div>
    </div>
  );
};
export default MainLayout;
