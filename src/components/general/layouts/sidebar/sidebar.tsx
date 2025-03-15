import type { FC } from 'react';

import { useState } from 'react';
import {
  FaAddressBook,
  FaAngleLeft,
  FaAngleRight,
  FaBilibili,
  FaBowlFood,
  FaCalendarDays,
  FaChartSimple,
} from 'react-icons/fa6';

const Sidebar: FC = () => {
  const [open, setOpen] = useState(true);
  // const [activeId, setActiveId] = useState(0);
  const Menus = [
    { id: 0, title: 'داشبورد', icon: <FaChartSimple />, gap: false },
    { id: 1, title: 'لیست غذا', icon: <FaBowlFood />, gap: true },
    { id: 2, title: 'افرودن غذا', icon: <FaCalendarDays />, gap: false },
    { id: 3, title: 'حساب کاربری', icon: <FaAddressBook />, gap: false },
  ];
  return (
    <div className={`${open ? `w-64` : `w-20`} bg-layout relative h-screen p-5 pt-8 duration-300`}>
      {/* Add Button */}
      <button
        aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
        className="absolute -left-3 top-20 flex size-7 cursor-pointer items-center justify-center rounded-full border-2 bg-white text-center"
        type="button"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {open ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
      {/* Title */}
      <div className="flex items-center justify-end gap-x-4 text-white">
        <h1 className={`origin-left font-medium duration-300 ${!open ? 'scale-0' : ''}`}>
          سامانه تغذیه
        </h1>
        <div>
          <FaBilibili className="text-3xl duration-500" />
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((menu) => (
          <li className={menu.gap ? 'mt-10' : 'mt-2'} key={menu.id || `menu-${menu.title}`}>
            <button
              type="button"
              // onClick={() => {
              //   setActiveId(index);
              // }}
              className={`${
                open ? 'w-10/12' : 'w-2 justify-center'
              } mx-auto flex w-full cursor-pointer items-center justify-end 
              gap-x-4  rounded-md px-5 py-3 text-slate-100 hover:text-white`}
            >
              <span className={`text-sm ${!open ? 'hidden' : ''} origin-left duration-200`}>
                {menu.title}
              </span>
              <div>{menu.icon}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
