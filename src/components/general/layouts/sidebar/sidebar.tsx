import type { FC } from 'react';

import { LuCircleUserRound } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { PiForkKnifeBold } from 'react-icons/pi';
import { useNavigate } from 'react-router';

import type { MenuItemType } from './sidebar-types';

import Logo from '../../ui-kit/logo/logo';
import { useLayoutContext } from '../../ui-kit/providers/layout-provider';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { setSidebarData } = useLayoutContext();
  const Menus: MenuItemType[] = [
    { id: 1, title: 'مشاهده پروفایل', icon: <LuCircleUserRound /> },
    { id: 2, title: 'رزرو غذا', icon: <PiForkKnifeBold /> },
    { id: 3, title: 'مشاهده سبد خرید', icon: <MdOutlineShoppingCart /> },
  ];

  const navigateToPageById = (id: number) => {
    switch (id) {
      case 1:
        void navigate('/profile');
        break;
      case 2:
        void navigate('/');
        break;
      case 3:
        void navigate('/shopping-cart');
        break;
    }
  };
  const handleChange = (ItemData: MenuItemType) => {
    navigateToPageById(ItemData.id);
    setSidebarData(ItemData);
  };
  return (
    <div className={`border-layout-main h-screen w-full border-l bg-white p-5 pt-8 `}>
      <Logo />
      <ul className="pt-2">
        <div className="px-4 py-6 text-2xl font-medium">مجتبی منصوری</div>
        {Menus.map((menu) => (
          <li className="group" key={menu.id || `menu-${menu.title}`}>
            <button
              className="hover:bg-gradient-animated grid w-full cursor-pointer grid-cols-6 p-2 text-sm"
              type="button"
              onClick={() => handleChange(menu)}
            >
              <div className="grid h-full place-content-center text-3xl">{menu.icon}</div>
              <div className="col-span-5 grid items-center justify-items-start">
                <span>{menu.title}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
