import { ChevronRightIcon } from '@heroicons/react/outline';
import type { MouseEventHandler } from 'react';

const PopularOption = ({
  address,
  street_name,
  province,
  onClick,
}: {
  address: string;
  street_name: string;
  province: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      className="cursor-pointer px-3 py-2 text-base"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <span>
            <ChevronRightIcon className="h-4 w-4 text-black" />
          </span>
          <span className="font-semibold text-black">{address}</span>
          <span className="text-gray-600">
            {street_name}, {province}
          </span>
        </div>
        <div className="text-gray-600">City</div>
      </div>
    </div>
  );
};

export default PopularOption;
