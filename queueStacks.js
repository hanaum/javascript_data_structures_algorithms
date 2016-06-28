function Queue() {
  this.stack = [];
}

Queue.prototype.dequeue = function() {
  if (this.stack.length === 0) {
    return undefined;
  }

  var newStack = [];
  var stackLength = this.stack.length;
  for (var i = 0; i < stackLength - 1; i++) {
    newStack.push(this.stack.pop());
  }
  var dequeued = this.stack.pop();
  for (var i = 0; i < stackLength - 1; i++) {
    this.stack.push(newStack.pop());
  }
  return dequeued;
}

Queue.prototype.enqueue = function(item) {
  this.stack.push(item);
}

var queue = new Queue();
queue.dequeue();
queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
queue.enqueue(-1);
console.log(queue);
queue.dequeue();
console.log(queue);
