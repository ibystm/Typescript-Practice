export {};

type o = {
  name: string;
  age: number;
};

let Object: o = {
  name: "Ham-san",
  age: 43,
};

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let numbersumUnknown = numberUnknown + 20;
}

// typeof を使って型の特定を確認しながらコードを書くことをタイプガードという
console.log(typeof numberUnknown);
