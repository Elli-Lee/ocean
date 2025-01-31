# 시간복잡도 O(N)
def is_correct_parenthesis(string):
  result = []
  # string 길이가 홀수라면 볼것도 없음
  if len(string) % 2 != 0:
    return False
  
  for parenthsis in string:
    if not result: 
      result.append(parenthsis)
      continue
    last_one = result.pop()
    
    if not (last_one == '(' and parenthsis == ')'):
      result.append(last_one)
      result.append(parenthsis)
  
  if result:
    return False
    
  return True

def is_correct_parenthesis_solution(string):
  stack = []
  for i in range(len(string)):
    if string[i] == "(": # 열린 괄호라면 스택에 쌓을 것임
      stack.append("(")
    elif string[i] == ')':
      if len(stack) == 0: # 열린 괄호가 없는데 닫는 괄호가 온 경우
        return False
      stack.pop()
      
  if len(stack) != 0: # 현재 열린 괄호가 남아있음
    return False
  else:
    return True

print("정답 = True / 현재 풀이 값 = ", is_correct_parenthesis_solution("(())"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis_solution(")"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis_solution("((())))"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis_solution("())()"))
print("정답 = False / 현재 풀이 값 = ", is_correct_parenthesis_solution("((())"))