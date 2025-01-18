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

    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    def get_node(self, index):
        node = self.head
        count = 0
        while count < index:
            node = node.next
            count += 1
        return node

    # index 번째 Node 뒤에 value 를 가진 Node 추가
    def add_node(self, index, value):
        new_node = Node(value)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        node = self.get_node(index - 1) # 새 노드를 바라볼 노드
        next_node = node.next # 원래 바라보던 다음 노드
        node.next = new_node
        new_node.next = next_node

    # index 번째 node 제거
    def delete_node(self,index):
        if index == 0:
            self.head = self.head.next
            return

        prev_node = self.get_node(index - 1)
        target_node = self.get_node(index)
        prev_node.next = target_node.next


linked_list = LinkedList(5)
linked_list.append(12)
linked_list.append(3)
linked_list.add_node(1, 6)
linked_list.delete_node(3)
linked_list.print_all()