class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
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
    console.log('head ->', values, '<- tail, length =', this.length)
  }

  // create new node at the end of the list
  push(value) {
    const newNode = new Node(value)
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

  // remove the lest node from the list
  pop() {
    const temp = this.tail
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

  // insert newNode at the beginning of the list
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  // remove first node in the list
  shift() {
    if (!this.head) {
      return undefined
    }
    const temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      temp.next = null
      this.head.prev = null
    }

    this.length--
    return temp
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    if (index > this.length / 2) {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev
      }
    } else {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    }
    return temp
  }

  set(index, value) {
    const temp = this.get(index)
    if (!temp) {
      return false
    }
    temp.value = value
    return true
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    if (index < 0 || index > this.length) {
      return false
    }
    const newNode = new Node(value)
    const after = this.get(index)
    const before = after.prev
    newNode.prev = before
    newNode.next = after
    after.prev = newNode
    before.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    const temp = this.get(index)
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.next = null
    temp.prev = null
    this.length--
    return temp
  }
}

const dll = new DoublyLinkedList(0)

dll.push(1)
dll.push(2)
dll.push(3)
// dll.pop()
// dll.unshift(0)
// dll.shift()
// console.log(dll.get(5))
// dll.set(1, 10)
// console.log(dll.insert(3, 10))
console.log(dll.remove(1))
dll.printAllNodes()
