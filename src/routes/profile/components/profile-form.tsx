import type { FC } from 'react';

import { TbCameraPlus } from 'react-icons/tb';

const ProfileForm: FC = () => {
  return (
    <div className=" flex w-3/5 flex-col items-center justify-center rounded bg-white p-8 shadow-lg">
      <div className="border-layout-secondary bg-primary-light flex size-40 items-center justify-center rounded-full text-6xl">
        <TbCameraPlus />
      </div>
      <div className="grid grid-cols-4 items-center gap-4 border-b p-4">
        <div className="font-bold text-gray-700">نام:</div>
        <div className="col-span-2 text-gray-500">Harry</div>
        <button
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          ویرایش
        </button>
      </div>
      <div className="grid grid-cols-4 items-center gap-4 border-b p-4">
        <div className="font-bold text-gray-700">نام:</div>
        <div className="col-span-2 text-gray-500">Harry</div>
        <button
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          ویرایش
        </button>
      </div>
      <div className="grid grid-cols-4 items-center gap-4 border-b p-4">
        <div className="font-bold text-gray-700">نام:</div>
        <div className="col-span-2 text-gray-500">Harry</div>
        <button
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          ویرایش
        </button>
      </div>
      <div className="grid grid-cols-4 items-center gap-4 border-b p-4">
        <div className="font-bold text-gray-700">نام:</div>
        <div className="col-span-2 text-gray-500">Harry</div>
        <button
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          type="button"
        >
          ویرایش
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
