import type { Dispatch, FC, ReactNode } from 'react';

import { createContext, useContext, useMemo, useState } from 'react';
import { PiForkKnifeBold } from 'react-icons/pi';

interface MenuItemType {
  id: number;
  title: string;
  icon: ReactNode;
}

interface LayoutContextType {
  sidebarData: MenuItemType;
  setSidebarData: Dispatch<React.SetStateAction<MenuItemType>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  const [sidebarData, setSidebarData] = useState<MenuItemType>({
    id: 2,
    title: 'رزرو غذا',
    icon: <PiForkKnifeBold />,
  });

  const contextValue = useMemo(
    () => ({ sidebarData, setSidebarData }),
    [sidebarData, setSidebarData],
  );

  return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
