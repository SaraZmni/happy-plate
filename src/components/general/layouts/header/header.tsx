import type { FC } from 'react';

import { MdOutlineShoppingCart } from 'react-icons/md';

const Header: FC = () => {
  return (
    <header>
      <div className="border-gradient grid w-full grid-cols-[auto_1fr] gap-1 py-4">
        <div className="mr-5 grid h-full place-content-center text-3xl">
          <MdOutlineShoppingCart />
        </div>
        <div className="grid items-center justify-items-start">سبد خرید</div>
      </div>
    </header>
  );
};
export default Header;
