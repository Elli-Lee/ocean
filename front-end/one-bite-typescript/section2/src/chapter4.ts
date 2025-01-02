// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이유진",
  nickname: "elli",
  birth: "1111-11-11",
  bio: "타입스크립트 공부중",
  location: "대한민국",
};

let user2: User = {
  id: 2,
  name: "이무진",
  nickname: "elli",
  birth: "1111-11-11",
  bio: "타입스크립트 공부중",
  location: "대한민국",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
