# 주어진 문자열을 모두 0 혹은 모두 1로 같게 만드는 최소 횟수를 반환하시오.

input = "11111111100"

# 0 에서 1을 마주쳤을 때 뒤집는다 -> 전체를 0으로 만들기 위한 작업
# 1 에서 0을 마주쳤을 때 뒤집는다 -> 전체를 1로 만들기 위한 작업
def find_count_to_turn_out_to_all_zero_or_all_one(string):
    count_to_all_zero = 0
    count_to_all_one = 0
    if string[0] == '0':
        count_to_all_one += 1
    if string[0] == '1':
        count_to_all_zero += 1

    for i in range(len(string) - 1):
        if string[i] != string[i+1]:   # 현재 인덱스의 값과 다음 인덱스의 값이 다르다면 -> 뒤집어야 하는 포인트
            if string[i+1] == "1":
                count_to_all_zero += 1
            if string[i+1] == "0":
                count_to_all_one += 1

    return min(count_to_all_zero, count_to_all_one)


result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)




### 풀이
# def find_count_to_turn_out_to_all_zero_or_all_one(string):
#     to_zero_count = change_all_char_to_target("0", string)
#     to_one_count = change_all_char_to_target("1", string)
#     if to_zero_count > to_one_count:
#         return to_one_count
#     else:
#         return to_zero_count
#
#
# def change_all_char_to_target(target, string):
#     count = 0
#     prev_num = ""
#     for i in range(len(string)):
#         if (string[i] != target) and ((prev_num == target) or (prev_num == "")): #target과 현재 숫자가 같으면 count 추가 X
#             count += 1
#         prev_num = string[i]
#     return count
#
# result = find_count_to_turn_out_to_all_zero_or_all_one(input)
# print(result)