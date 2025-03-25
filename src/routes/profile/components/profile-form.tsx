import type { FC } from 'react';

import { MdModeEdit } from 'react-icons/md';
import { TbCameraPlus } from 'react-icons/tb';

const ProfileForm: FC = () => {
  return (
    <div className=" flex w-3/5 flex-col items-center justify-center rounded bg-white px-8 py-5 shadow-lg">
      <div className="border-layout-secondary bg-primary-light flex size-40 items-center justify-center rounded-full text-6xl">
        <TbCameraPlus />
      </div>
      <div className="border-b-layout-secondary grid grid-cols-4 items-center gap-4 p-2 text-sm">
        <div className=" font-bold text-gray-500">نام:</div>
        <div className="col-span-2  text-gray-700">مجتبی</div>
        <button
          className="text-primary-light flex w-full items-center justify-center gap-2 rounded px-4 py-2   hover:text-blue-600"
          type="button"
        >
          ویرایش
          <MdModeEdit />
        </button>
      </div>
      <div className="border-b-layout-secondary grid grid-cols-4 items-center gap-4 p-2 text-sm">
        <div className=" font-bold text-gray-500">نام خانوادگی :</div>
        <div className="col-span-2  text-gray-700">منصوری</div>
        <button
          className="text-primary-light flex w-full items-center justify-center gap-2 rounded px-4 py-2   hover:text-blue-600"
          type="button"
        >
          ویرایش
          <MdModeEdit />
        </button>
      </div>
      <div className="border-b-layout-secondary grid grid-cols-4 items-center gap-4 p-2 text-sm">
        <div className=" font-bold text-gray-500">تاریخ تولد :</div>
        <div className="col-span-2  text-gray-700">1390/5/10</div>
        <button
          className="text-primary-light flex w-full items-center justify-center gap-2 rounded px-4 py-2   hover:text-blue-600"
          type="button"
        >
          ویرایش
          <MdModeEdit />
        </button>
      </div>
      <div className=" grid grid-cols-4 items-center gap-4 p-2 text-sm">
        <div className=" font-bold text-gray-500">کد ملی :</div>
        <div className="col-span-2  text-gray-700">102050602</div>
        <button
          className="text-primary-light flex w-full items-center justify-center gap-2 rounded px-4 py-2   hover:text-blue-600"
          type="button"
        >
          ویرایش
          <MdModeEdit />
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
