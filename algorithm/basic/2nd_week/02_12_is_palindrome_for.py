# 반복문으로 구현
input = "abcdcd"

def is_palindrome(string):
    front_index = 0
    last_index = len(string) - 1
    while front_index < last_index:
      if string[front_index] != string[last_index]:
        return False
      front_index += 1
      last_index -= 1
    return True


print(is_palindrome(input))