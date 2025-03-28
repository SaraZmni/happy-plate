import type { FC } from 'react';

const DailyMeals: FC = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr_2fr] place-items-center gap-4 p-4">
      <div className="col-start-2">صبحانه</div>
      <div>ناهار</div>
      <div>شام</div>
    </div>
  );
};

export default DailyMeals;
