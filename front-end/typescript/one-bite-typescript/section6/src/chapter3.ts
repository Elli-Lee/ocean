/**
 * 인터페이스와 클래스
 */

// 클래스의 설계도 역할
// 인터페이스에 정의한 모든 필드는 public
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
