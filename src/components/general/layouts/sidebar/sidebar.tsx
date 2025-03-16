import type { FC } from 'react';

import { LuCircleUserRound } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { PiForkKnifeBold } from 'react-icons/pi';

import Logo from '../../ui-kit/logo/logo';

const Sidebar: FC = () => {
  const Menus = [
    { id: 0, title: 'مجتبی منصوری', icon: null, gap: false },
    { id: 1, title: 'مشاهده پروفایل', icon: <LuCircleUserRound />, gap: true },
    { id: 2, title: 'رزرو غذا', icon: <PiForkKnifeBold />, gap: false },
    { id: 3, title: 'مشاهده سبد خرید', icon: <MdOutlineShoppingCart />, gap: false },
  ];
  return (
    <div className={`border-layout-main h-screen w-full border-l p-5 pt-8 `}>
      <Logo />
      <ul className="pt-6">
        {Menus.map((menu) => (
          <li
            className={`${menu.gap ? 'mt-10' : 'mt-2'} text-xl`}
            key={menu.id || `menu-${menu.title}`}
          >
            <button className="grid w-full grid-cols-6 p-2" type="button">
              <div className="grid h-full place-content-center">{menu.icon}</div>
              <div className="col-span-5 grid place-items-start">{menu.title}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
