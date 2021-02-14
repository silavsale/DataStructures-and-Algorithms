function LinkedList() {
    this.head = null // головач лена 🐺
    this.tail = null // хвост до колена 🦨
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
}

LinkedList.prototype.addToTail = function(value){
    let newNode = new Node(value, null, this.tail)
    // newNode { value: value, next: null, prev: this.tail }
    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}

let ll = new LinkedList

ll.addToHead(1)
// ll.addToHead(2)
ll.addToTail(3)

console.log(ll)
