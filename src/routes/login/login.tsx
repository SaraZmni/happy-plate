import type { FC } from 'react';

import LoginForm from './login-form';

const Login: FC = () => {
  return (
    <div className="bg-login-page min-h-screen">
      <LoginForm />
    </div>
  );
};

export default Login;
