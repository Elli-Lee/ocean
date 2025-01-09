/**
 * mapped 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // Key가 무엇이 될 수 있는지         어떤 value type을 가질 것인지
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // 기능
  return {
    id: 1,
    name: "이유진",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "이유진",
  age: 25,
});
