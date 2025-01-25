shop_menus = ["만두", "떡볶이", "오뎅", "사이다", "콜라"]
shop_orders = ["오뎅", "콜라", "만두"]

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
        
    return False

# def is_available_to_order(menus, orders):
#   for order in orders:
#     if order not in menus:
#       return False
#   return True

def is_available_to_order(menus, orders):
  menus_set = set(menus) 
  # 중복 제거한 집합  -> 왜 굳이 set로 집합화 하는가?
  # python이 in 연산자를 set(O(1))과 list(O(N))를 다르게 처리한다, 
  for order in orders:
    if order not in menus_set:
      return False
  return True  



result = is_available_to_order(shop_menus, shop_orders)
print(result)