export const numberFormatterWithoutIcon = (value: any) =>
  new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 10,
  }).format(value);
