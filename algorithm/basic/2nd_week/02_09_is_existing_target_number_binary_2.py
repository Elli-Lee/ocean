finding_target = 2
finding_numbers = [0, 3, 5, 6, 1, 2, 4]

def is_exist_target_number_binary(target, array):
    sorted_array = sorted(array)
    first_index = 0
    last_index = len(sorted_array) -1
    while first_index <= last_index:
      mid_index = (first_index + last_index) // 2
      mid_num = sorted_array[mid_index]
      if mid_num == target:
        return True
      elif mid_num < target:
        first_index = mid_index + 1
      else:
        last_index = mid_index - 1
        
    return 1


result = is_exist_target_number_binary(finding_target, finding_numbers)
print(result)