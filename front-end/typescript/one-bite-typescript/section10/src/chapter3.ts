/**
 * Exclude<T, U>
 */

type A = Exclude<string | boolean, boolean>;

type Exclude<T, U> = T extends U ? never : T;

/**
 * Exclude<T, U>
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 */
function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
