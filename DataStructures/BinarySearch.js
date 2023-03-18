// Binary search tree construction function
function BST(value) {
  this.value = value
  this.left = null
  this.right = null
}

BST.prototype.insert = function insert(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value)
    else this.left.insert(value)
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value)
    else this.right.insert(value)
  }
}

BST.prototype.contains = function contains(value) {
  if (value === this.value) return true
  if (value < this.value) {
    if (!this.left) return false
    return this.left.contains(value)
  }
  if (value > this.value) {
    if (!this.right) return false
    return this.right.contains(value)
  }

  return null
}

BST.prototype.depthFirstTraversal1 = function depthFirstTraversal1(iteratorFunc) {
  if (this.left) this.left.depthFirstTraversal1(iteratorFunc)
  iteratorFunc(this.value)
  if (this.right) this.right.depthFirstTraversal1(iteratorFunc)
}

BST.prototype.depthFirstTraversal2 = function depthFirstTraversal2(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value)
  if (this.left) this.left.depthFirstTraversal2(iteratorFunc, order)
  if (order === 'in-order') iteratorFunc(this.value)
  if (this.right) this.right.depthFirstTraversal2(iteratorFunc, order)
  if (order === 'post-order') iteratorFunc(this.value)
}

BST.prototype.breadthFirstTraversal = function breadthFirstTraversal(iteratorFunc) {
  const queue = [this]
  while (queue.length) {
    console.log('queue', queue)
    const treeNode = queue.shift()
    iteratorFunc(treeNode)
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

BST.prototype.getMinVal = function getMinVal() {
  if (this.left) return this.left.getMinVal()
  return this.value
}

BST.prototype.getMaxVal = function getMaxVal() {
  if (this.right) return this.right.getMaxVal()
  return this.value
}

const bst = new BST(50)

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

function iteratorFunc(node) {
  console.log(node.value)
}

// bst.depthFirstTraversal1(iteratorFunc)
// bst.depthFirstTraversal2(iteratorFunc, "post-order")
// bst.breadthFirstTraversal(iteratorFunc)

// console.log(bst.getMinVal(iteratorFunc))

console.log(bst.getMinVal())
console.log(bst.getMaxVal())
