import type { FC } from 'react';

const Profile: FC = () => {
  return (
    <div className="bg-profile-page h-full">
      <div className="flex h-full items-center justify-center">
        <div className="rounded bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold">profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
