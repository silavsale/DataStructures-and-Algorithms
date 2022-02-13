class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.last = newNode
    this.first = newNode
    this.length = 1
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.last = newNode
      this.first = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    const temp = this.first
    if (this.length === 0) {
      return undefined
    }
    if (this.length === 1) {
      this.last = null
      this.first = null
    } else {
      this.first = this.first.next
      temp.next = null
    }
    this.length--
    return temp
  }
}

const myQueue = new Queue(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.dequeue()
console.log(myQueue)
