function Node(value) {
  this.value = value;
  this.next = null;
}

function SLL() {
  this.head = null;
}

SLL.prototype.append = function(value) {
  var node = new Node(value);
  if (this.head === null) {
    this.head = node;
    return;
  }

  var currentNode = this.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
}


SLL.prototype.insert = function(position, value) {
  if (position < 0) {
    return;
  }

  var node = new Node(value);
  var currentNode = this.head;
  if (position === 0) {
    node.next = currentNode;
    return;
  }

  if (currentNode === null) {
    return;
  }

  var counter = 0;
  var prevNode;

  while (currentNode.next && counter < position) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    counter++;
  }
  if (counter === position) {
    prevNode.next = node;
    node.next = currentNode;
  } else if (counter < position) {
    return;
  }
}

SLL.prototype.swapKth = function(k) {
  // Special case to handle when k is 0.
  if (k === 0) {
    var currentNode = this.head;
    this.head = currentNode.next;
    if (this.head.next) {
      currentNode.next = this.head.next;
    }
    this.head.next = currentNode;

    return;
  }

  var prevNode = this.getKth(k - 1);

  if (prevNode == null || prevNode.next == null || prevNode.next.next == null) {
    return;
  }

  var currentNode = prevNode.next;
  var nextNode = currentNode.next;

  prevNode.next = nextNode;
  currentNode.next = nextNode.next;
  nextNode.next = currentNode;
}

SLL.prototype.getKth = function(k) {
  if (k < 0) {
    return;
  }

  var currentNode = this.head;
  var counter = 0;

  while (currentNode.next && counter < k) {
    currentNode = currentNode.next;
    counter++;
  }

  if (counter < k) {
    return;
  }
  
  return currentNode;
}

var sll = new SLL();
sll.append(2);
// console.log(sll);
sll.append(6);
// console.log(sll);
sll.insert(1, 8);
sll.append(3);
sll.append(4);
// console.log(sll);
sll.swapKth(0);
console.log(sll);