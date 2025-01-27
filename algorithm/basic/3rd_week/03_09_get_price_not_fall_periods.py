from collections import deque
prices = [1, 2, 3, 2, 3]

# 일단 반복문으로 구현해보자
# 일단 풀긴 했는데 맘에 안 듦
# 시간복잡도 O(N^2)
def get_price_not_fall_periods_repeat(prices):
  result = []
  for i in range(len(prices)):
    count = 0  
    for j in range(i+1, len(prices)):
      if prices[i] > prices[j]:
        count = j-i
        break
    if i != len(prices) - 1 and count == 0:
      result.append(len(prices) - i -1)
      continue
    result.append(count)
  return result
    
# 시간복잡도를 줄여보자.
# 무슨 특징이 있지?
# 이중반복문 탐색을 최대한 줄이자
# 어쨌든 최대한 중첩반복문을 돌리게 되는 경우를 줄였으나... 여전히 시간복잡도는 O(N^2)이다.
def get_price_not_fall_periods_queue(prices):
  n = len(prices)
  result = [0] * n
  for i in range(n-1): # 맨 마지막은 어차피 0
    if prices[i] > prices[i+1]:
      result[i] = 1
    else:
      for j in range(i+1, n):
        if prices[i] > prices[j]:
          result[i] = j - i
          break
      else:
        result[i] = n - i - 1
  return result

def get_price_not_fall_periods_solution(prices):
  result = []
  prices = deque(prices)
  while prices: # prices 길이가 0 보다 큰 동안
    price_not_fall_period = 0
    current_price = prices.popleft()
    for next_price in prices:
      if current_price > next_price:
        price_not_fall_period += 1
        break
      price_not_fall_period += 1
    result.append(price_not_fall_period)
  
  return result

print(get_price_not_fall_periods_solution(prices))

print("정답 = [4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_solution(prices))
print("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_solution([3, 9, 9, 3, 5, 7, 2]))
print("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ", get_price_not_fall_periods_solution([1, 5, 3, 6, 7, 6, 5]))