prices = [1, 2, 3, 2, 3]

# 일단 반복문으로 구현해보자
# 일단 풀긴 했는데 맘에 안 듦
# 시간복잡도 O(N^2)
def get_price_not_fall_periods_repeat(prices):
  result = []
  for i in range(len(prices)):
    count = 0  
    for j in range(i+1, len(prices)):
      if prices[i] >  prices[j]:
        count = j-i
        break
    if i != len(prices) - 1 and count == 0:
      result.append(len(prices) - i -1)
      continue
    result.append(count)
  return result
    
# 시간복잡도를 줄여보자.
# 무슨 특징이 있지?
# 이중반복문 탐색을 최대한 줄이자 -> 진짜 불가피한 경우에만 반복문 속 반복문으로 탐색
def get_price_not_fall_periods_queue(prices):

  return 




print(get_price_not_fall_periods_queue(prices))

print("정답 = [4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_queue(prices))
print("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_queue([3, 9, 9, 3, 5, 7, 2]))
print("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_queue([1, 5, 3, 6, 7, 6, 5]))