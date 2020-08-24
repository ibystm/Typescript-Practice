export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

// restパラメータ
const sum = (...values: number[]): number => {
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);
