const Stack = require('../src/Stack');
// from test
var a = [1, 2, 3];
var fromTest = new Stack(a);
console.assert(fromTest.toArray()[1] === a[1], "get method failed");

// isStack test
var a = [1, 2, 3];
var isStackTest = new Stack(a);
console.assert(Stack.isStack(isStackTest), "isStack test failed");
console.assert(!Stack.isStack(a), "isStack test failed");

// of test
var a = [1, 2, 3];
var ofTest = Stack.of(1, 2, 3);
console.assert(ofTest.toArray()[1] === 2, "of test failed");

//test filter
var a = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var b = ["exuberant", "destruction", "present"];
var testFilter = new Stack(a).filter(word => word.length > 6);
var assumeReuslt = new Stack(b);
for (let i = 0; i < testFilter.toArray().length; i++) {
    console.assert(testFilter.toArray()[i] === assumeReuslt.toArray()[i], "copyWithin test failed");
}
//test push pop peek
var a = [1, 2, 3];
var stackTest = new Stack(a);
stackTest.push(4);
console.assert(stackTest.length === 4 && stackTest.peek() === 4, "peek failed");
console.assert(stackTest.length === 4 && stackTest.toArray()[3] === 4, "push failed");
console.assert(stackTest.pop() === 4 && stackTest.length === 3, "pop failed");

// iterator test
const arr = ['a', 'b', 'c', 'd', 'e'];
const iteratorTest = new Stack(arr);
const eList = iteratorTest[Symbol.iterator]();
console.assert(eList.next().value === 'e', "iterator test failed");
console.assert(eList.next().value === 'd', "iterator test failed");

// equals test
var a = new Stack([[1, 2], 3, [[4]]]);
var b = new Stack([[1, 2], 3, [[4]]]);
console.assert(a.equals(b) === true, "equals test 1 failed");

// forEach test
var array1 = [1, 2, 3];
var queueTest = [];
var queueTest2 = [];
array1.forEach((element, index) => queueTest[index] = element * 2);
const forEachTest = new Stack(array1);
forEachTest.forEach((element, index) => queueTest2[index] = element * 2);
console.assert(new Stack(queueTest).equals(new Stack(queueTest2)), "forEach test failed");
