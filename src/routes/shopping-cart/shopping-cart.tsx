import type { FC } from 'react';

import DailyMeals from '../../components/general/daily-meals/daily-meals';
import WalletMonitor from '../../components/general/wallet-monitor/wallet-monitor';

const ShoppingCart: FC = () => {
  return (
    <div>
      <WalletMonitor />
      <div className="grid place-items-center">
        <div className="w-10/12 shadow-2xl">
          <DailyMeals />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
