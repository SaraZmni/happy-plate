import type { FC } from 'react';

import ProfileForm from './components/profile-form';

const Profile: FC = () => {
  return (
    <div className="bg-profile-page h-full">
      <div className="flex h-full items-center justify-center">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Profile;
