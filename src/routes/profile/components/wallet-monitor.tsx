import type { FC } from 'react';

const WalletMonitor: FC = () => {
  return (
    <div className=" mt-3 grid w-3/5 grid-cols-4 items-center gap-4 bg-[#FCFCFC]/70 px-16 py-6 text-sm">
      <div>موجودی کیف پول : </div>
      <div className="col-span-2">52000 تومان</div>
      <button className="bg-blue-500 py-2" type="button">
        افزایش موجودی
      </button>
    </div>
  );
};

export default WalletMonitor;
