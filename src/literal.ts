export {};

let dayOfTheWeek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfTheWeek = "月";

// string型だと、stringが無限に定義することが可能になってしまうので、
let month = 1;
month = 12;
month = 13;

let TRUE: true = true;
