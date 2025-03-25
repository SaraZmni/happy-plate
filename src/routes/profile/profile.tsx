import type { FC } from 'react';

import ProfileForm from './components/profile-form';

const Profile: FC = () => {
  return (
    <div className="bg-profile-page h-full">
      <div className="flex h-full flex-col items-center justify-center">
        <ProfileForm />
        <div className=" mt-3 grid w-3/5 grid-cols-4 items-center gap-4 bg-[#FCFCFC]/70 px-16 py-6 text-sm">
          <div>موجودی کیف پول : </div>
          <div className="col-span-2">52000 تومان</div>
          <button className="bg-blue-500 py-2" type="button">
            افزایش موجودی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
