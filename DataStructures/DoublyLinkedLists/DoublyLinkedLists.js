class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  printAllNodes() {
    let temp = this.head
    const values = []
    for (let i = 0; i < this.length; i++) {
      values.push(temp.value)
      temp = temp.next
    }
    console.log("head ->", values, "<- tail, length =", this.length)
  }

  // O of 1 complexity
  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
    return this
  }

  pop() {
    let temp = this.tail
    if (!this.head) {
      return undefined
    }
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    }

    this.length--
    return temp
  }
}

const dll = new DoublyLinkedList(1)

dll.push(2)
dll.push(3)
dll.pop()

dll.printAllNodes()
