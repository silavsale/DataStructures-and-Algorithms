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
    // console.log(total)
  }
  // console.log(total)
  const bucket = total % this.numBuckets
  // console.log(bucket)
  return bucket
}

HashTable.prototype.insert = function (key, value) {
  const index = this.hash(key)
  console.log("INDEX:", index)
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value
  } else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

HashTable.prototype.get = function (key) {
  const index = this.hash(key)
  if (!this.buckets[index]) return null
  else {
    let currentNode = this.buckets[index]
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value
      }
      currentNode = currentNode.next
    }
    return null
  }
}

HashTable.prototype.retrieveAll = function () {
  const nodes = []
  for (let i = 0; i < this.buckets.length; i++) {
    let currentNode = this.buckets[i]
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
  }
  return nodes
}

const myHt = new HashTable(30)

myHt.insert("Dean", "dean@gmail.com")
myHt.insert("Megan", "megan@gmail.com")
myHt.insert("Dane", "dane@gmail.com")
// myHt.insert("Dean", "dean2@gmail.com")
myHt.insert("Enda", "endaChamp@gmail.com")
myHt.insert("Joe", "joey@gmail.com")
myHt.insert("Samantha", "sammy@gmail.com")

// console.log(myHt.get("Enda"))

console.log(myHt.retrieveAll())
// console.log(myHt.buckets)
