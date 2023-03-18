function LinkedListConstructor() {
  this.head = null // головач лена 🐺
  this.tail = null // хвост до колена 🦨
}

function Node(value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

LinkedListConstructor.prototype.addToHead = function addToHead(value) {
  const newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode
  this.head = newNode
}

LinkedListConstructor.prototype.addToTail = function addToTail(value) {
  const newNode = new Node(value, null, this.tail)
  // newNode { value: value, next: null, prev: this.tail }
  if (this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
}

LinkedListConstructor.prototype.removeHead = function removeHead() {
  if (!this.head) return null
  const oldHead = this.head.value
  if (this.head.next) this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return oldHead
}

LinkedListConstructor.prototype.removeTail = function removeTail() {
  if (!this.tail) return null
  const oldTail = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null

  return oldTail
}

LinkedListConstructor.prototype.search = function search(val) {
  let currentNode = this.head

  while (currentNode) {
    if (currentNode.value === val) {
      return currentNode.value
    }
    currentNode = currentNode.next
  }

  return 'No value found'
}

LinkedListConstructor.prototype.indexOf = function indexOf(value) {
  const arrayOfIndexes = []
  let index = 0
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value === value) {
      arrayOfIndexes.push(index)
    }
    currentNode = currentNode.next
    index++
  }

  return arrayOfIndexes
}

const ll = new LinkedListConstructor()

ll.addToHead(3)
ll.addToTail(5)
ll.addToTail(3)
ll.addToTail(8)
// ll.addToTail(5)
// ll.addToHead(1)
// ll.addToHead(2)
// ll.removeHead()

// console.log(ll.removeHead())
// console.log(ll)
// console.log(ll.removeTail())
// console.log(ll.removeTail())
// console.log(ll)
console.log(ll.indexOf(3))
