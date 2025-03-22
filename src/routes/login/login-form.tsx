// import type { FC } from 'react';

// const LoginForm: FC = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="rounded bg-white p-8 shadow-lg">
//         <h1 className="mb-4 text-2xl font-bold">Login</h1>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import type { FC } from 'react';

import Button from '../../components/general/ui-kit/button/button';

const LoginForm: FC = () => {
  return (
    <div className="bg-login-page flex min-h-screen items-center justify-center">
      <div className="w-96 bg-white p-10 shadow-lg">
        <h1 className="mb-6 text-center text-xl font-bold">ورود به حساب کاربری</h1>
        <form>
          <div className="mb-4">
            <label className="mb-2 block text-right font-medium" htmlFor="username">
              : نام کاربری
            </label>
            <input
              className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="username"
              type="text"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-right font-medium" htmlFor="password">
              :رمز عبور
            </label>
            <input
              className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="password"
              type="password"
            />
          </div>

          <button
            className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            type="submit"
          >
            ورود
          </button>
          <Button className="w-full text-center text-xs">رمز عبور را فراموش کرده ام</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
