import { ChevronRightIcon } from '@heroicons/react/outline';
import type { MouseEventHandler } from 'react';

import { numberFormatterWithoutIcon } from '@/function';

const SaleOption = ({
  address,
  sold_price,
  postal_code,
  onClick,
}: {
  address: string;
  sold_price: string;
  postal_code: string;
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
          <span className="text-gray-600">{postal_code}</span>
        </div>
        <div className="text-gray-600">
          ${numberFormatterWithoutIcon(sold_price)}
        </div>
      </div>
    </div>
  );
};

export default SaleOption;
