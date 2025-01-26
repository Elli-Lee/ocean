/**
 * 접근 제어자
 */

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

  const employee = new Employee("이유진")ㅣ