const Queue = require('../src/Queue');
// from test
var a = [1, 2, 3];
var fromTest = new Queue(a);
console.assert(fromTest.toArray()[1] === a[1], "get method failed");

// isQueue test
var a = [1, 2, 3];
var isQueueTest = new Queue(a);
console.assert(Queue.isQueue(isQueueTest), "isQueue test failed");
console.assert(!Queue.isQueue(a), "isQueuetest failed");

// of test
var a = [1, 2, 3];
var ofTest = Queue.of(1, 2, 3);
console.assert(ofTest.toArray()[1] === 2, "of test failed");

//test filter
var a = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var b = ["exuberant", "destruction", "present"];
var testFilter = new Queue(a).filter(word => word.length > 6);
var assumeReuslt = new Queue(b);
for (let i = 0; i < testFilter.toArray().length; i++) {
    console.assert(testFilter.toArray()[i] === assumeReuslt.toArray()[i], "copyWithin test failed");
}

//enqueue, dequeue, peek test
var a = [1, 2, 3];
var queueTest = new Queue(a);
console.assert(queueTest.peek() === 1, "peek failed");
queueTest.enqueue(4);
console.assert(queueTest.length === 4 && queueTest.toArray()[queueTest.length - 1] === 4, "enqueue failed");
console.assert(queueTest.dequeue() === 1 && queueTest.length === 3, "enqueue failed");


// iterator test
const arr = ['a', 'b', 'c', 'd', 'e'];
const iteratorTest = new Queue(arr);
const eList = iteratorTest[Symbol.iterator]();
console.assert(eList.next().value === 'a', "iterator test failed");
console.assert(eList.next().value === 'b', "iterator test failed");

// equals test
var a = new Queue([[1, 2], 3, [[4]]]);
var b = new Queue([[1, 2], 3, [[4]]]);
console.assert(a.equals(b) === true, "equals test 1 failed");

// forEach test
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var queueTest = [];
var queueTest2 = [];
array1.forEach((element, index) => queueTest[index] = element * 2);
const forEachTest = new Queue(array2);
forEachTest.forEach((element, index) => queueTest2[index] = element * 2);
console.assert(new Queue(queueTest).equals(new Queue(queueTest2)), "forEach test failed");
