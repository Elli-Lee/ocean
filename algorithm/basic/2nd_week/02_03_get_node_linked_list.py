class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    # LinkedList의 가장 끝에 있는 노드에 새로운 노드를 연결
    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)

    # Linked List에서 저장한 head를 따라가면서 현재 있는 노드들을 전부 출력해주는 함수
    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    # Linked List에서 원소 찾기 (index 번째 노드 자체를 반환)
    def get_node(self, index):
        cur_index = 0
        cur = self.head
        while cur_index != index:
            cur = cur.next
            cur_index += 1
        return cur

linked_list = LinkedList(5)
linked_list.append(12)
print(linked_list.get_node(0).data) # -> 5를 들고 있는 노드를 반환해야 합니다!