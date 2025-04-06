import { toPersianDigit } from '../../../../helpers/string-helper';

const MealSchedule = () => {
  const dates = ['11/8', '12/8', '13/8', '14/8', '15/8', '16/8', '17/8'];

  const mealData = [
    {
      title: 'صبحانه',
      days: [
        'reserved',
        'available',
        'reserved',
        'available',
        'available',
        'reserved',
        'available',
      ],
    },
    {
      title: 'ناهار',
      days: [
        'available',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'available',
        'available',
      ],
    },
    {
      title: 'شام',
      days: [
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'available',
      ],
    },
  ];

  return (
    <div className="mt-4 h-52 w-11/12">
      <div className="size-full rounded-lg border border-[#F2CC8F4D] bg-white p-4">
        <h3 className="mb-2.5 flex justify-center">برنامه هفت روز آینده</h3>
        <div className="mb-2 grid grid-cols-[70px_1fr]">
          <div></div> {/* Empty space for alignment */}
          <div className="grid grid-cols-7 gap-2">
            {dates.map((date, index) => (
              <div className="flex justify-center" key={index}>
                <span className="rotate-[30deg] whitespace-nowrap text-xs text-gray-500">
                  {toPersianDigit(date)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 gap-4">
          {mealData.map((meal, index) => (
            <div className="grid grid-cols-[70px_1fr] items-center" key={index}>
              <span className="font-medium">{meal.title}</span>
              <div className="grid grid-cols-7 gap-2">
                {meal.days.map((status, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`size-4 rounded-sm border border-[#A19F94] transition-colors ${
                      status === 'reserved' ? 'bg-[#81B29A]' : ' bg-white hover:bg-gray-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealSchedule;
