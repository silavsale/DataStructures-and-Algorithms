function LinkedList() {
    this.head = null
    this.tail = null
}

function Node(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
}

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null)
    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
    // console.log('value', value)
    // console.log('newNode', newNode)
    // console.log('this.head', this.head)
    // console.log('this.tail', this.tail)
}

let aa = new LinkedList 

aa.addToHead(10)
aa.addToHead(11)
aa.addToHead(300)
aa.addToHead(400)
aa.addToHead(500)
aa.addToHead(700)

console.log('aa', aa)

console.log('head')
