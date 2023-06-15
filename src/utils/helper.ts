export const debounce = (func: any, delay: number) => {
  let timer: any;
  return (...args: any) => {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
