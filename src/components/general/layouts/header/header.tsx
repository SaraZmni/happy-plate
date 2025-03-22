import type { FC } from 'react';

import { useLayoutContext } from '../../ui-kit/providers/layout-provider';

const Header: FC = () => {
  const { sidebarData } = useLayoutContext();

  return (
    <header>
      <div className="border-gradient grid w-full grid-cols-[auto_1fr] gap-1 py-4">
        <div className="mr-5 grid h-full place-content-center text-3xl">{sidebarData.icon}</div>
        <div className="grid items-center justify-items-start">{sidebarData.title}</div>
      </div>
    </header>
  );
};
export default Header;
