const now = new Date();

export const makeYearList = (start = 1900, end = now.getFullYear()) => {
  return Array(Math.abs(end - start) + 1)
    .fill(end)
    .map((v, i) => v - i);
};

export const throttle = (callback, delay) => {
  let timer;
  return (event) => {
    if (!timer) {
      timer = setTimeout(
        () => {
          callback(event);
          timer = null;
        },
        delay,
        event,
      );
    }
  };
};
