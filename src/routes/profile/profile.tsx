import type { FC } from 'react';

import WalletMonitor from '../../components/general/wallet-monitor/wallet-monitor';
import ProfileForm from './components/profile-form';

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
