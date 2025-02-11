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


def is_available_to_order(menus, orders):
  menus.sort() # 메뉴의 길이가 N -> O(NlogN)의 시간복잡도 필요
  for order in orders: # O(M)
    if not is_exist_target_number_binary(order, menus): # O(logN)
      return False
  return True

# def is_available_to_order(menus, orders):
#   is_all_available = True
#   for order in orders:
#     if order not in menus:
#       return False
#   return True


result = is_available_to_order(shop_menus, shop_orders)
print(result)