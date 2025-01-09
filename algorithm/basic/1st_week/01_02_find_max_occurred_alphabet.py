def find_max_occurred_alphabet(string):
    alphabet_array = find_alphabet_occurrence_array(string)
    max = 0
    maxIndex = 0
    for i, num in enumerate(alphabet_array):
        if max < num:
            max = num
            maxIndex = i
    # 인덱스를 알파벳으로 변환
    result = chr(maxIndex + ord('a'))
    return result

# 문자열에서 각 알파벳의 빈도수를 배열의 값으로 저장하는 함수
def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if not char.isalpha():
            continue
        index = ord(char) - ord('a')
        alphabet_occurrence_array[index] += 1
    return alphabet_occurrence_array


result = find_max_occurred_alphabet
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))