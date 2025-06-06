# 버블 정렬
def bubble_sort(array):
    for i in range(len(array) - 1): # 총 len - 1 번 반복하면 정렬 완료
        for j in range(len(array)-1-i):
            if array[j] > array[j+1]:
              array[j], array[j+1] = array[j+1], array[j]
    return array

# 선택 정렬
def selection_sort(array):
  n = len(array)
  for i in range(n - 1):   # O(N)
    min_index = i
    for j in range(n-i):
      if array[i+j] < array[min_index]: # O(N)
        min_index = i+j
    array[i], array[min_index] = array[min_index], array[i]
  return array

# 삽입 정렬
def insertion_sort(array):
    n = len(array)
    for i in range(1, n):
      for j in range(i):
        if array[i-j] < array[i-j-1]:
          array[i-j], array[i-j-1] = array[i-j-1], array[i-j]
        else:
          break
    return array

# 병합 정렬
def merge_sort(array):
    if len(array) == 1:
      return array
    mid = len(array) // 2
    left_array = merge_sort(array[0 : mid])
    right_array = merge_sort(array[mid : ])
    # merge(merge_sort())
    return merge(left_array, right_array)

def merge(array1, array2):
    result = []
    array1_index = 0
    array2_index = 0
    while array1_index < len(array1) and array2_index < len(array2):
        if array1[array1_index] < array2[array2_index]:
            result.append(array1[array1_index])
            array1_index += 1
        else:
            result.append(array2[array2_index])
            array2_index += 1

    if array1_index == len(array1):
        while array2_index < len(array2):
            result.append(array2[array2_index])
            array2_index += 1

    if array2_index == len(array2):
        while array1_index < len(array1):
            result.append(array1[array1_index])
            array1_index += 1

    return result