export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  weight: number,
  height: number,
  printable?: boolean
) => {
  const bmi: number = weight / height / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

console.log(bmi(1.78, 86, false));
