# Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.

input = 20
# N의 제곱근보다 크지 않은 어떤 소수로도 나누어 떨어지지 않는다

def find_prime_list_under_number(number):
    prime_numbers = []
    for i in range(2, number+1):
        for j in prime_numbers:
            # 하나라도 나누어 떨어지면 소수 아님
            if j * j <= i and i % j == 0:
                break
        else:
            # 현재까지의 소수 배열 요소로 안 나누어 떨어짐 -> prime_numbers에 추가
            prime_numbers.append(i)
    return prime_numbers


result = find_prime_list_under_number(input)
print(result)