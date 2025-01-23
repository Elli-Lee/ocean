class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
      self.head = Node(value)

    def append(self, value):
      cur = self.head
      while cur.next is not None:
        cur = cur.next
      cur.next = Node(value)

    # 전체 linked_list 길이 반환
    def get_all_nodes_count(self):
      count = 0
      cur = self.head
      while cur is not None:
        count += 1
        cur = cur.next
      return count
      
    # 끝에서 k번째 노드 반환(노드 자체를 반환해야 한다.)
    def get_kth_node_from_last(self, k):
      total_count = self.get_all_nodes_count()
      cur = self.head
      target_index = total_count - k
      for i in range(target_index):
         cur = cur.next
      return cur
    
    # 개선 방법
    # 포인터를 두개를 둔다. fast & slow
    # fast가 끝에 도달할 때 slow가 우리가 찾는 노드가 된다
    def improved_kth_node_from_last(self, k):
      fast = self.head
      slow = self.head
      # k개 노드 앞선 fast 구함
      for i in range(k):
        fast = fast.next
      while fast is not None:
        fast = fast.next
        slow = slow.next
      return slow
      
        

linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)
linked_list.append(9)
linked_list.append(10)


print(linked_list.improved_kth_node_from_last(3).data)  # 7이 나와야 합니다!