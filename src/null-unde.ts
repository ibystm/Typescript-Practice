export {};

let absence: null = null;

let data: undefined = undefined;

function error(message: string) {
  // 呼び元に戻ってこないnever return
  throw new Error(message);
}

const t = () => {
  throw error;
};

let foo: void = undefined;
