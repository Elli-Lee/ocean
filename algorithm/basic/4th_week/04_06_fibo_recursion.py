# fibo(n) = fibo(n-1) + fibo(n-2)

input = 20

def fibo_recursion(n):
  # 구현해보세요!
  if n == 1 or n == 2:
    return 1
  return fibo_recursion(n-1) + fibo_recursion(n-2)


print(fibo_recursion(input))  # 6765