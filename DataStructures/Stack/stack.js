class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  printAllNodes() {
    const array = []
    let node = this.top
    for (let i = 0; i < this.length; i++) {
      array.push(node.value)
      node = node.next
      if (i === 0) {
        console.log(array[i] + " - top")
      } else {
        console.log(array[i])
      }
    }
    console.log("Stack length: " + this.length)
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.top) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.top) {
      return undefined
    }
    const temp = this.top
    this.top = temp.next
    temp.next = null
    this.length--
    return temp
  }
}

const myStack = new Stack(0)
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()

console.log(myStack)
myStack.printAllNodes()
