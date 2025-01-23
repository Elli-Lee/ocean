finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    first_index = 0
    last_index = len(array) - 1
    while first_index <= last_index:
      mid_index = (first_index + last_index) // 2
      mid_num = array[mid_index]
      if target == mid_num:
        return True
      elif target < mid_num:
        last_index = mid_index - 1
      else:
        first_index = mid_index + 1
    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)