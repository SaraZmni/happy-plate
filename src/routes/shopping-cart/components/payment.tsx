import type { FC } from 'react';

import { toPersianDigit } from '../../../helpers/string-helper';

const Payment: FC = () => {
  return (
    <div className="mt-4 grid justify-center p-4">
      <div className="grid auto-cols-max grid-flow-col items-center gap-2">
        <strong className="text-gray-700">جمع کل:</strong>
        <span className="font-medium text-gray-900">
          {toPersianDigit('157,000')}
          <span className="mr-1 text-sm text-gray-600">تومان</span>
        </span>
      </div>

      <button
        className=" my-3 cursor-pointer bg-[#3D405B] px-10  py-2.5 text-sm text-white transition-colors duration-200 hover:bg-[#484B69] focus:outline-none focus:ring-2 focus:ring-[#3D405B]/50"
        type="submit"
      >
        تایید و پرداخت
      </button>
    </div>
  );
};

export default Payment;
