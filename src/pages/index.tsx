import {
  AdjustmentsIcon,
  ChevronDownIcon,
  HeartIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import Select from 'react-select';

import { searchOnMarket, searchSoldObject } from '@/api';
import PopularOption from '@/components/Options/PopularOption';
import SaleOption from '@/components/Options/SaleOption';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { debounce } from '@/utils/helper';

const defaultProps = {
  zoom: 13,
  center: {
    lat: 36.778259,
    lng: -119.417931,
  },
};

const Index = () => {
  const [selectedValue, setSelectedValue] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [keyword, setKeyWord] = useState('');
  const [popularResults, setPopularResults] = useState([]);
  const [saleResults, setSaleResults] = useState([]);

  const handleMarketSearch = async (value: string) => {
    if (value.length > 3) {
      try {
        const response = await searchOnMarket(value);
        setPopularResults(response.data.results);
      } catch (error) {
        console.log('ERRROR>>>', error);
      }
    }
  };
  const handleSoldSearch = async (value: string) => {
    if (value.length > 3) {
      try {
        const response = await searchSoldObject(value);
        setSaleResults(response.data.results);
      } catch (error) {
        console.log('ERRROR>>>', error);
      }
    }
  };

  const serchHandler = async (value: string) => {
    setKeyWord(value);

    debounce(handleMarketSearch(value), 5000);
    debounce(handleSoldSearch(value), 5000);
  };

  return (
    <Main meta={<Meta title="Wealth funnels" description="Wealth funnels" />}>
      <div className="relative min-h-screen">
        <div className="absolute top-0 z-0 h-full w-full">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
            }}
            center={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            // draggable={false}
            options={{
              clickableIcons: false,
              zoomControl: false,
              fullscreenControl: false,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-screen-xl p-10">
          <div className="flex h-16 w-full items-center gap-3 rounded-full bg-white p-3">
            <div className="flex h-full items-center gap-3">
              <button className="flex h-full items-center justify-center gap-2 rounded-full bg-primary-200 px-3 text-lg font-bold text-white">
                <span>sale</span>
                <span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </span>
              </button>
              <div>
                <SearchIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="flex h-full w-full">
              <Select
                instanceId="react-select"
                className="react-select-container"
                classNamePrefix="react-select"
                value={selectedValue}
                onChange={(va) => {
                  setSelectedValue(va as any);
                }}
                menuIsOpen={false}
                inputValue={keyword}
                onInputChange={(val) => serchHandler(val)}
                isMulti
              />
            </div>
            <div className="flex h-full w-1/2 items-center justify-end gap-3">
              <div className="flex h-full items-center justify-center gap-2">
                <button className="flex h-full items-center justify-center gap-2 rounded-full text-lg font-bold">
                  <span>
                    <AdjustmentsIcon className="h-5 w-5" />
                  </span>
                  <span>Filters</span>
                </button>
                <span>|</span>
                <button className="flex h-full items-center justify-center gap-2 rounded-full text-lg font-bold">
                  <span>
                    <HeartIcon className="h-5 w-5" />
                  </span>
                  <span>Wishes</span>
                </button>
              </div>
              <button className="flex h-full items-center justify-center gap-2 rounded-full bg-primary-200 px-3 text-lg font-bold text-white">
                Save Search
              </button>
            </div>
          </div>

          <div className="pt-6">
            <div className="overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm">
              <div className="h-full w-full">
                <h2 className="bg-gray-100 px-10 py-2 text-sm font-medium text-black">
                  Popular locations
                </h2>
                {popularResults && popularResults.length > 0 ? (
                  popularResults.map((item: any) => (
                    <div key={item.id}>
                      <PopularOption
                        address={item.address}
                        street_name={item.street_name}
                        province={item.province}
                        onClick={(e) => {
                          e.preventDefault();
                          setPopularResults((prev) =>
                            prev.filter((i: any) => i.id !== item.id)
                          );
                          setSelectedValue((prev) => [
                            ...prev,
                            { label: item.address, value: item.address },
                          ]);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="cursor-pointer px-3 py-2 text-center text-base">
                    No results.
                  </div>
                )}
              </div>

              <div className="h-full w-full">
                <h2 className="bg-gray-100 px-10 py-2 text-sm font-medium text-black">
                  For sale
                </h2>
                {saleResults && saleResults.length > 0 ? (
                  saleResults.map((item: any) => (
                    <div key={item.id}>
                      <SaleOption
                        address={item.full_address}
                        sold_price={item.sold_price}
                        postal_code={item.postal_code}
                        onClick={(e) => {
                          e.preventDefault();
                          setSaleResults((prev) =>
                            prev.filter((i: any) => i.id !== item.id)
                          );
                          setSelectedValue((prev) => [
                            ...prev,
                            { label: item.address, value: item.address },
                          ]);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="cursor-pointer px-3 py-2 text-center text-base">
                    No results.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
