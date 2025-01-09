# Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때, 이 문자열에서 반복되지 않는 첫번째 문자를 반환하시오. 만약 그런 문자가 없다면 _ 를 반환하시오.

input = "abadabac"

def find_not_repeating_first_character(string):
    alphabet_occurrence_array = find_alphabet_occurrence(string)
    for i in range(len(string)):
        if alphabet_occurrence_array[get_alphabet_index(string[i])] == 1:
            return string[i]
        # 해당 알파벳의 인덱스이 occ_array에서 1이면 바로 그 char 반환
    return "_"

def find_alphabet_occurrence(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if not char.isalpha():
            continue
        alphabet_index = ord(char) - ord('a')
        alphabet_occurrence_array[alphabet_index] += 1
    return alphabet_occurrence_array

def get_alphabet_index(string):
    return ord(string) - ord('a')
result = find_not_repeating_first_character

print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))