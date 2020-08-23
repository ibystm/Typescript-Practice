export {};

type Pitcher1 = {
  throwingSpeed: number; // 急速
};

type Batter1 = {
  battingAverage: number; // 打率
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

type TwowayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwowayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
