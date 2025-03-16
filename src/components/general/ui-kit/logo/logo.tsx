import type { FC } from 'react';

import favicon from '../../../../assets/images/favicon.png';

const Logo: FC = () => {
  return (
    <div className="grid grid-cols-6 items-center  ">
      <div>
        <img alt="لوگوی سامانه تغذیه" src={favicon} />
      </div>
      <h1 className="text-secondary col-span-2 text-xl">سامانه تغذیه</h1>
    </div>
  );
};

export default Logo;
