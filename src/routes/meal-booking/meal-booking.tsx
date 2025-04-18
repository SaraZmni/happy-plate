import type { FC } from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router';

import DailyMeals from '../../components/general/daily-meals/daily-meals';

const MealBooking: FC = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('');

  const handleSelection = (key: string) => {
    setSelectedKey(key);
  };
  return (
    <>
      <DailyMeals />
      <div className="border-layout-main mx-auto grid w-11/12 grid-cols-[1fr_2fr_2fr_2fr] place-items-center py-2 shadow-md">
        <time>
          <div className="font-medium">شنبه</div>
          <div className="text-sm text-gray-500">1402/5/23</div>
        </time>

        <div className="w-4/5 bg-white">
          <label
            className={`border-layout-main flex items-center gap-3  py-1 text-sm font-semibold transition ${
              selectedKey === 'key1' ? 'bg-green-200 text-green-700' : ''
            }`}
          >
            <input
              className="mx-2 rounded border-gray-400"
              data-key="key1"
              name="food"
              type="radio"
              onChange={(e) => handleSelection(e.target.dataset.key ?? '')}
            />
            نان پنیر
          </label>

          <label
            className={`border-layout-main flex items-center gap-3  py-1 text-sm font-semibold transition ${
              selectedKey === 'key2' ? 'bg-green-200 text-green-700' : ''
            }`}
          >
            <input
              className="mx-2 rounded border-gray-400"
              data-key="key2"
              name="food"
              type="radio"
              onChange={(e) => handleSelection(e.target.dataset.key ?? '')}
            />
            عدسی
          </label>
        </div>
      </div>
      <button
        className=" mx-auto my-3 grid cursor-pointer bg-[#3D405B] px-10  py-2.5 text-sm text-white transition-colors duration-200 hover:bg-[#484B69] focus:outline-none focus:ring-2 focus:ring-[#3D405B]/50"
        type="submit"
        onClick={() => navigate('/shopping-cart')}
      >
        برو به سبد خرید
      </button>
    </>
  );
};

export default MealBooking;
