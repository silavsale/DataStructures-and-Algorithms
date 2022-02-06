class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
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

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let temp = this.head
    let pre = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  shift() {
    if (!this.head) {
      return undefined
    }
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return temp
  }

  get(index) {
    let temp = this.head
    if (index < 0 || index > this.length) return undefined
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    if (index < 0 || index > this.length) return false
    const newNode = new Node(value)
    let temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return this
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length) {
      return this.pop()
    }
    let before = this.get(index - 1)
    let temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }

  reverseLs(ll) {
    let temp = ll.head
    ll.head = ll.tail
    ll.tail = temp
    let next = temp.next
    let prev = null

    for (let i = 0; i < ll.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return ll
  }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)

// myLinkedList.unshift(88)
// myLinkedList.unshift(99)
// myLinkedList.shift()
// myLinkedList.pop()
// myLinkedList.set(2, 333)
// myLinkedList.insert(3, 555)
// myLinkedList.remove(4)
// myLinkedList.reverse()
myLinkedList.addTwoNumbers()

// console.log(myLinkedList)
myLinkedList.printAllNodes()
