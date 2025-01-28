all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]

# 일단 풀어보자
# 제일 먼저 생각나는 방법
# 시간복잡도 O(N^2)
def get_absent_student_for(all_array, present_array):
  result = []
  for target in all_array:
    for student in present_array:
      if target == student:
        break
    else:
      result.append(target)    
  return result

# 다른 방법을 생각해보자
def get_absent_student_dict(all_array, present_array):
  result = {} # result 딕셔너리
  for student in all_array:
    result[student] = True
  for student in present_array:
    del result[student]
  for key in result.keys():
    return key


print(get_absent_student_dict(all_students, present_students))

print("정답 = 예지 / 현재 풀이 값 = ",get_absent_student_dict(["류진","예지","채령","리아","유나"],["리아","류진","채령","유나"]))
print("정답 = RM / 현재 풀이 값 = ",get_absent_student_dict(["정국","진","뷔","슈가","지민","RM"],["뷔","정국","지민","진","슈가"]))