import type { FC } from 'react';

const MealBooking: FC = () => {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_2fr_2fr] place-items-center gap-4 p-4">
        <div className="col-start-2">صبحانه</div>
        <div>ناهار</div>
        <div>شام</div>
      </div>
      <div className="mx-auto grid w-11/12 grid-cols-[1fr_2fr_2fr_2fr] place-items-center border-2">
        <time>
          <div className="font-medium">شنبه</div>
          <div className="text-sm text-gray-500">1402/5/23</div>
        </time>
        <div>
          <label class="flex items-center gap-3 text-lg font-semibold">
            <input className="rounded border-gray-400" name="food" type="radio" value="نان پنیر" />
            نان پنیر
          </label>
          <label class="flex items-center gap-3 text-lg font-semibold">
            <input className="rounded border-gray-400" name="food" type="radio" value="عدسی" />
            عدسی
          </label>
        </div>
      </div>
    </>
  );
};

export default MealBooking;
