input = [4, 6, 2, 9, 1]

[4,6] 

def insertion_sort(array):
  for i in range(1, len(array)):
    target = array[i] # 원하는 위치에 끼워넣을 대상
    target_cur_index = i
    for j in range(i-1, -1, -1):
      if array[j] > target:
        array[j], array[target_cur_index] = array[target_cur_index], array[j]
        target_cur_index -= 1 # 자리 옮겼으므로
      else: # 배치하고자 하는 애(target)가 맨 마지막 애보다 큰 경우: 그 앞쪽은 비교할 필요도 없음
        break # j 그만 돌고 그다음 target으로 넘어감
    print("i=", i, "   array: ", array)
  return array


insertion_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ",insertion_sort([5,8,4,7,7]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",insertion_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",insertion_sort([100,56,-3,32,44]))