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

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null
    const oldHead = this.head.value
    if (this.head.next) this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    return oldHead
}

LinkedList.prototype.removeTail = function(){
   if (!this.tail) return null
   const oldTail = this.tail.value;
   this.tail = this.tail.prev
   if (this.tail) this.tail.next = null
   else this.head = null

   return oldTail
}

let ll = new LinkedList

ll.addToHead(2)
ll.addToTail(3)
ll.addToTail(4)
// ll.addToTail(5)
// ll.addToHead(1)
// ll.addToHead(2)
// ll.removeHead()

// console.log(ll.removeHead())
console.log(ll)
console.log(ll.removeTail())
console.log(ll.removeTail())
console.log(ll)
