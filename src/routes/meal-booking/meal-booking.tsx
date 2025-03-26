import type { FC } from 'react';

import { useState } from 'react';

const MealBooking: FC = () => {
  const [selectedKey, setSelectedKey] = useState('');

  const handleSelection = (key: string) => {
    setSelectedKey(key);
  };
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_2fr_2fr] place-items-center gap-4 p-4">
        <div className="col-start-2">صبحانه</div>
        <div>ناهار</div>
        <div>شام</div>
      </div>
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
    </>
  );
};

export default MealBooking;
