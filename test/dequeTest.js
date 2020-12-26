const Deque = require('../src/Deque');
// from test
var a = [1, 2, 3];
var fromTest = new Deque(a);
console.assert(fromTest.toArray()[1] === a[1], "get method failed");

// isDeque test
var a = [1, 2, 3];
var isDequeTest = new Deque(a);
console.assert(Deque.isDeque(isDequeTest), "isDeque test failed");
console.assert(!Deque.isDeque(a), "isDequetest failed");

// of test
var a = [1, 2, 3];
var ofTest = Deque.of(1, 2, 3);
console.assert(ofTest.toArray()[1] === 2, "of test failed");

//test filter
var a = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var b = ["exuberant", "destruction", "present"];
var testFilter = new Deque(a).filter(word => word.length > 6);
var assumeReuslt = new Deque(b);
for (let i = 0; i < testFilter.length; i++) {
    console.assert(testFilter.toArray()[i] === assumeReuslt.toArray()[i], "copyWithin test failed");
}

// addFirst, addLast, peekFirst, peekLast, removeFirst, removeLast test
var a = [1, 2, 3];
var dequeTest = new Deque(a);
console.assert(dequeTest.peekFirst() === 1, "peekFirst failed");
console.assert(dequeTest.peekLast() === 3, "peekLast failed");
dequeTest.addFirst(0);
console.assert(dequeTest.length === 4 && dequeTest.toArray()[0] === 0, "addFirst failed");
console.assert(dequeTest.removeFirst() === 0 && dequeTest.length === 3, "removeFirst failed");
dequeTest.addLast(4);
console.assert(dequeTest.length === 4 && dequeTest.toArray()[3] === 4, "addLast failed");
console.assert(dequeTest.removeLast() === 4 && dequeTest.length === 3, "removeLast failed");

/**
 * iterator test
 */
const arr = ['a', 'b', 'c', 'd', 'e'];
const iteratorTest = new Deque(arr);
const eList = iteratorTest[Symbol.iterator]();
console.assert(eList.next().value === 'a', "iterator test failed");
console.assert(eList.next().value === 'b', "iterator test failed");

// equals test
var a = new Deque([[1, 2], 3, [[4]]]);
var b = new Deque([[1, 2], 3, [[4]]]);
console.assert(a.equals(b) === true, "equals test 1 failed");

// forEach test
var array1 = [1, 2, 3];
var queueTest = [];
var queueTest2 = [];
array1.forEach((element, index) => queueTest[index] = element * 2);
const forEachTest = new Deque(array1);
forEachTest.forEach((element, index) => queueTest2[index] = element * 2);
console.assert(new Deque(queueTest).equals(new Deque(queueTest2)), "forEach test failed");
