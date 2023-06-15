import axios from 'axios';

export const searchOnMarket = async (keyword: string) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/on_market/?q=${keyword}`
  );
  return result;
};

export const searchSoldObject = async (keyword: string) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/sold_objects/?q=${keyword}`
  );
  return result;
};
