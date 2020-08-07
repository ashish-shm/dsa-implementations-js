function Queue() {
  queue = [];
  this.print = function () {
    console.log(queue);
  };
  this.enqueue = function (element) {
    queue.push(element);
  };
  this.dequeue = function () {
    return queue.shift();
  };
  this.front = function () {
    return queue[0];
  };
  this.size = function () {
    return queue.length;
  };
  this.isEmpty = function () {
    return queue.length === 0;
  };
}

var obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.print();
obj.dequeue();
console.log(obj.front());
obj.print();
