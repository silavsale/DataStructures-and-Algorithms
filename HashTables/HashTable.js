function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

HashTable.prototype.hash = function (key) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
    console.log(total)
  }
  console.log(total)
  const bucket = total % this.numBuckets
  return bucket
}

HashTable.prototype.insert = function (key, value) {
  const index = this.hash(key)
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
  else {
    const currentNode = this.buckets[index]
    while (current.next) {
      currentNode = current.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

const myHt = new HashTable(30)

console.log(myHt.hash("Becca"))
console.log(462 % 30)
console.log(myHt)
