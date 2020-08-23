export {};

enum Month {
  January = 1,
  Feburary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// enumで自動付与される先頭の数値は変えられる!

enum Colors {
  RED = "#FF0000",
  WHITE = "#FFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000",
}

let green = Colors.GREEN;
console.log(green);
