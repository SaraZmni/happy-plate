import type { FC } from 'react';

import { ImBin } from 'react-icons/im';

import DailyMeals from '../../components/general/daily-meals/daily-meals';
import WalletMonitor from '../../components/general/wallet-monitor/wallet-monitor';

const ShoppingCart: FC = () => {
  return (
    <div>
      <WalletMonitor />
      <div className="h-90 grid justify-items-center">
        <div className="w-10/12 shadow-2xl">
          <DailyMeals />
          <div className="grid grid-cols-6 px-4">
            <time className="col-span-1">
              <div className="font-medium">شنبه</div>
              <div className="text-sm text-gray-500">1402/5/23</div>
            </time>
            <div className="border-b-layout-secondary col-span-5 grid grid-cols-3 place-items-center pb-4">
              <article className="p-2">
                <h3 className="py-3 text-sm">لوبیایی</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف لوبیایی"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
              <article className="p-2">
                <h3 className="py-3 text-sm">زرشک پلو با مرغ</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف زرشک پلو با مرغ"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
              <article className="p-2">
                <h3 className="py-3 text-sm">چلو جوجه کباب</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف چلو جوجه کباب"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
            </div>
          </div>
          <div className="grid grid-cols-6 px-4">
            <time className="col-span-1">
              <div className="font-medium">شنبه</div>
              <div className="text-sm text-gray-500">1402/5/23</div>
            </time>
            <div className="border-b-layout-secondary col-span-5 grid grid-cols-3 place-items-center pb-4">
              <article className="p-2">
                <h3 className="py-3 text-sm">لوبیایی</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف لوبیایی"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
              <article className="p-2">
                <h3 className="py-3 text-sm">زرشک پلو با مرغ</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف زرشک پلو با مرغ"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
              <article className="p-2">
                <h3 className="py-3 text-sm">چلو جوجه کباب</h3>
                <div className="grid grid-cols-2">
                  <p className="text-sm font-semibold">10,000 تومان</p>
                  <button
                    aria-label="حذف چلو جوجه کباب"
                    className="cursor-pointer justify-self-center text-red-500 hover:text-red-700"
                    type="button"
                  >
                    <ImBin />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
