/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이유진",
  age: 28,
  position: "FE Developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("이유진", 28, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
