class Person:
    # 생성자 함수
    def __init__(self, name_param):
        self.name = name_param
        print("hihi", self)

    def talk(self):
        print("안녕하세요 저는", self.name, "입니다.")

# 클래스를 통해 객체를 만드는 법
person_1 = Person("이유진")
person_1.talk()
person_2 = Person("헤헤헤")


