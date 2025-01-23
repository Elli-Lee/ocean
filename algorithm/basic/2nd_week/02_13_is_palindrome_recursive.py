input = "abccba"

def is_palindrome(string):
  if len(string) <= 1:
    return True
  if string[0] != string[-1]:
    return False

  return is_palindrome(string[1:-1])

# def is_palindrome(string):
#   first_index = 0
#   last_index = len(string) - 1
#   if first_index < last_index:
#     first_letter = string[first_index]
#     last_letter = string[last_index]
#     print(first_letter, last_letter)

#     if first_letter != last_letter:
#       return False
#     else:
#       return is_palindrome(string[1:len(string) - 1])
#   return True

print(is_palindrome(input))