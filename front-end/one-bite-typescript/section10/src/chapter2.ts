/**
 * Pick<T, K> : 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 * T 타입에서 K 프로퍼티만 고름
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 옛날 post라 태그, thumbnailURL이 없었음
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 내용",
};

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/**
 * Omit<T, K>: 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

const noTitlePost: Omit<Post, "title"> = {
  tags: [],
  content: "",
  thumbnailURL: "",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Record<T, K> : 실무에서 자주 쓰임
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string }
>;

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
