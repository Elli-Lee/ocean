class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    # LinkedList의 가장 끝에 있는 노드에 새로운 노드를 연결
    def append(self, value):  #value는 맨 마지막 노드의 data
        cur = self.head
        while cur.next != None:
            cur = cur.next
        cur.next = Node(value)

    # Linked List에서 저장한 head를 따라가면서 현재 있는 노드들을 전부 출력해주는 함수
    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur=cur.next

    # Linked List에서 원소 찾기 (index 번째 노드 자체를 반환)
    def get_node(self, index):
        cur_index = 0
        cur = self.head
        while cur_index != index:
            cur = cur.next
            cur_index += 1
        return cur

    # index 번째 Node 뒤에 value 를 가진 Node 추가
    def add_node(self, index, value):
        new_node = Node(value)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        node = self.get_node(index - 1)  # 새 노드를 바라볼 노드
        next_node = node.next  # 원래 바라보던 다음 노드
        node.next = new_node
        new_node.next = next_node

    # Linked List 에서 index 번째 원소 삭제
    def delete_node(self, index):
        if index == 0:
            self.head = self.head.next
            return

        prev_node = self.get_node(index - 1)
        target_node = self.get_node(index)
        prev_node.next = target_node.next