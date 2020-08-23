export {};

type Mojiretsu = string; // stringのエイリアスはMojiretsu

const fooString = "こんにちは";

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Ham",
  age: 32,
};
