input = 50

# memo 라는 변수에 Fibo(1)과 Fibo(2) 값을 저장해놨습니다!
memo = {
  1: 1,
  2: 1
}


def fibo_dynamic_programming(n, fibo_memo):
  # 구현해보세요!
  if n in fibo_memo:
    return fibo_memo[n]
  else:
    fibo_memo[n] = fibo_dynamic_programming(n-1, fibo_memo) + fibo_dynamic_programming(n-2, fibo_memo)
    return fibo_memo[n]


print(fibo_dynamic_programming(input, memo))