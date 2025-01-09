def find_max_plus_or_multiply(array):
    plus_or_multiply_sum = 0
    for number in array:
        if number <= 1 or plus_or_multiply_sum <= 1:
            plus_or_multiply_sum += number
        else:
            plus_or_multiply_sum *= number
    return plus_or_multiply_sum
    # result = array[0]
    # for i in range(len(array)):
    #     if not i == len(array) - 1:  # 마지막 인덱스가 아니면
    #         plus = result + array[i+1]
    #         multiple = result * array[i+1]
    #         result = find_bigger_result(plus, multiple)
    # return result

def find_bigger_result(plus, multiple):
    if plus > multiple:
        return plus
    else:
        return multiple
# 현재 item과 다음 item을 더한 값과 곱한 값을 각각 구해서 더 큰 값으로 선택

result = find_max_plus_or_multiply
print("정답 = 728 현재 풀이 값 =", result([0,3,5,6,1,2,4]))
print("정답 = 8820 현재 풀이 값 =", result([3,2,1,5,9,7,4]))
print("정답 = 270 현재 풀이 값 =", result([1,1,1,3,3,2,5]))