numbers = [1, 1, 1, 1, 1]
target_number = 3


def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target):
    count = 0
    first_num = array[0]
    print("현재 array: ", array, "    현재 target: ", target)
    if len(array) == 1:
      if target == first_num or target * (-1) == first_num:
        return 1
      return 0
    count += get_count_of_ways_to_target_by_doing_plus_or_minus(array[1:], target - first_num)
    count += get_count_of_ways_to_target_by_doing_plus_or_minus(array[1:], target + first_num)

    return count


print(get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number))  # 5를 반환해야 합니다!