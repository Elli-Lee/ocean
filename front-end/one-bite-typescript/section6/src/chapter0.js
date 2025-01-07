/**
 * 클래스
 */

let studentA = {
  name: "이유진",
  grade: "A+",
  age: 27,
  study() {
    console.log("공부함");
  },
  introduce() {
    console.log("안녕하세요 FE 개발자 입니다.");
  },
};

// 클래스 이름은 첫글자가 대문자인 파스칼케이스를 주로 사용함
class Student {
  // 필드 -> 클래스가 만들어낼 프로퍼티
  name;
  grade;
  age;

  // 생성자 -> 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  study() {
    console.log("공부함");
  }

  introduce() {
    console.log(`안녕하세요  ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new StudentB("홍길동", "A+", 29);

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이유진", "A+", 27, "typescript");
