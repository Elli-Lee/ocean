class MaxHeap:
  def __init__(self):
    self.items = [None]

  def insert(self, value):
    self.items.append(value)
    cur_index = len(self.items) - 1
    while cur_index > 1:
      parent_index = cur_index // 2
      if self.items[cur_index] > self.items[parent_index]: # 자식이 더 크므로 바꿔야함
        self.items[cur_index], self.items[parent_index] = self.items[parent_index], self.items[cur_index]
        cur_index = parent_index
      else: # 자식이 부모보다 크지 않으면 
        break
    return


max_heap = MaxHeap()
max_heap.insert(3)
max_heap.insert(4)
max_heap.insert(2)
max_heap.insert(9)
print(max_heap.items)  # [None, 9, 4, 2, 3] 가 출력되어야 합니다!