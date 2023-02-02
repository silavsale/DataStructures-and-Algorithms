// Hash Table with collision
// Constuctor, Set, Get, Keys methods

class HashTable {
  constructor(size) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    console.log(index);
    console.log(this.dataMap);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  about() {
    return `This Hash Table length = ${this._length()} and has ${this._count()} items.`;
  }

  _length() {
    return this.dataMap.length;
  }

  _count() {
    let count = 0;
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i] !== undefined) {
        console.log(this.dataMap[i]);
        count += this.dataMap[i].length;
      }
    }
    return count;
  }
}

const hashTable = new HashTable(7);
// hashTable.set("IPA", 50);
// hashTable.set("IPA", 70);
hashTable.set("bolts", 700);
hashTable.set("washers", 800);
hashTable.set("lumber", 100);
hashTable.get("washers");
hashTable.about();
hashTable.keys();
