top_heights = [6, 9, 5, 7, 4]

# 첫번째 풀어보기...
# 시간복잡도 O(N^2)
def get_receiver_top_orders_repeat(heights):
  result = []
  result.append(0)
  for i in range(1, len(heights)):
    for j in range(i):
      if heights[i-j-1] > heights[i]:
        result.append(i-j)
        break
    else:
      result.append(0)
  return result

# 스택이라던데... 스택으로 풀어보기?
# 스택으로 풀려고 했으나... 이게 과연 스택으로 푼 걸까
# 일단 시간복잡도는 줄었다... O(N)
def get_receiver_top_orders_stack(heights):
  result_stack = [0]
  for i in range(1, len(heights)): # 바로 앞에거가 나보다 길면 그냥 바로 append
    if heights[i-1] > heights[i]:
      result_stack.append(i)
    else: # 바로 앞에거가 나보다 짧지만 이미 result_stack이 0이 아니라면 앞에랑 똑같은 값
      if result_stack[i-1] != 0:
        result_stack.append(result_stack[i-1])
        continue
      result_stack.append(0) # 앞에거가 나보다 짧은데 얘도 아무도 못 수신하면  
      
  return result_stack

def get_receiver_top_orders_solution(heights):
  answer = [0] * len(heights)
  while heights: # heights 가 비어있지 않으면 계속 반복
    height = heights.pop()
    for i in range(len(heights) - 1, -1, -1):
      if heights[i] > height:
        answer[len(heights)] = i+1
        break

  return answer

print(get_receiver_top_orders_solution(top_heights))  # [0, 0, 2, 2, 4] 가 반환되어야 한다!

print("정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ",get_receiver_top_orders_solution([6,9,5,7,4]))
print("정답 = [0, 0, 0, 3, 3, 3, 6] / 현재 풀이 값 = ",get_receiver_top_orders_solution([3,9,9,3,5,7,2]))
print("정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ",get_receiver_top_orders_solution([1,5,3,6,7,6,5]))