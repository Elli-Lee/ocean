input = [4, 6, 2, 9, 1]


# def selection_sort(array):
#     for i in range(len(array) - 1): 
#       min_value = array[i]
#       min_index = i# len - 1회 반복
#       for j in range(i, len(array)):
#         if min_value > array[j]:
#            min_value = array[j]
#            min_index = j
      
#       # 여기서 j 반복이 끝나서 각 반복의 최솟값이 구해질거임
#       array[i], array[min_index] = array[min_index], array[i]
#     return array

def selection_sort(array):
  n = len(array)
  for i in range(n - 1):   # O(N)
    min_index = i
    for j in range(n-i):
      if array[i+j] < array[min_index]: # O(N)
        min_index = i+j
    array[i], array[min_index] = array[min_index], array[i]
  return array

selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",selection_sort([4, 6, 2, 9, 1]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",selection_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",selection_sort([100,56,-3,32,44]))