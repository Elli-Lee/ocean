shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]


# 스택 이용
# 시간복잡도 O(N)
def get_max_discounted_price(prices, coupons):
  prices.sort(reverse=True)
  coupons.sort()

  total_price = 0
  for price in prices:
    if coupons:
      discount_rate = coupons.pop()
      total_price += price * (1-discount_rate*0.01)
    else:
      total_price += price

  return round(total_price)

# 정답
def get_max_discounted_price_solution(prices, coupons):
  prices.sort(reverse=True)
  coupons.sort(reverse=True)

  price_index = 0
  coupon_index = 0
  max_discounted_price = 0
  
  while price_index < len(prices) and coupon_index < len(coupons): # 가격과 쿠폰이 모두 배열 내의 원소일 떄
    discounted_price = prices[price_index] * (100 - coupons[coupon_index]) / 100
    max_discounted_price += discounted_price
    price_index += 1
    coupon_index += 1
  
  while price_index < len(prices):
    max_discounted_price += prices[price_index]
    price_index += 1

  return max_discounted_price


print("정답 = 926000 / 현재 풀이 값 = ", get_max_discounted_price_solution([30000, 2000, 1500000], [20, 40]))
print("정답 = 485000 / 현재 풀이 값 = ", get_max_discounted_price_solution([50000, 1500000], [10, 70, 30, 20]))
print("정답 = 1550000 / 현재 풀이 값 = ", get_max_discounted_price_solution([50000, 1500000], []))
print("정답 = 1458000 / 현재 풀이 값 = ", get_max_discounted_price_solution([20000, 100000, 1500000], [10, 10, 10]))