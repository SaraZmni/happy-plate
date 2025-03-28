import type { FC } from 'react';

import ProfileForm from './components/profile-form';
import WalletMonitor from './components/wallet-monitor';

const Profile: FC = () => {
  return (
    <div className="bg-profile-page h-full">
      <div className="flex h-full flex-col items-center justify-center">
        <ProfileForm />
        <WalletMonitor />
      </div>
    </div>
  );
};

export default Profile;
