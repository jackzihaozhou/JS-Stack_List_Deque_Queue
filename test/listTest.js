const List = require('../src/List');
const IllegalArgumentError = require('../src/IllegalArgumentError');

// get test
var a = [1, 2, 3];
const getTest = new List(a);
console.assert(getTest.get(1) === a[1], "get method failed");

// find test
var array1 = [5, 12, 8, 130, 44];
const findTest = new List(array1);
const found = findTest.find(element => element > 10);
console.assert(found === (array1.find(element => element > 10)), "find method failed");
// expected output: 12

// findIndex test
var array1 = [5, 12, 8, 130, 44];
const findIndexTest = new List(array1);
const isLargeNumber = (element) => element > 13;
console.assert(findIndexTest.findIndex(isLargeNumber) === array1.findIndex(isLargeNumber),
    "findIndex method failed");
// expected output: 3


// flat test
var arr1 = [0, 1, 2, [3, 4]];
const flatTest1 = new List(arr1);
console.assert(flatTest1.flat().equals(new List(arr1.flat())), "flat method test 1 failed");
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
const flatTest2 = new List(arr2);
console.assert(flatTest2.flat(2).equals(new List(arr2.flat(2))), "flat method test 2 failed");
// expected output: [0, 1, 2, [3, 4]]


// flatMap test
var arr1 = [1, 2, 3, 4];
const flatMapTest = new List(arr1);
console.assert(flatMapTest.flatMap(x => [x * 2]).equals(new List(arr1.flatMap(x => [x * 2]))),
    "flatMap method test 1 failed");
// [2, 4, 6, 8]

// only one level is flattened
console.assert(flatMapTest.flatMap(x => [[x * 2]]).equals(new List(arr1.flatMap(x => [[x * 2]]))),
    "flatMap method test 2 wrong");
// [[2], [4], [6], [8]]


// forEach test
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
array1.forEach((element, index) => array1[index] = element * 2);
const forEachTest = new List(array2);
forEachTest.forEach((element, index) => forEachTest.set(index, element * 2));
console.assert(new List(array1).equals(forEachTest), "forEach test failed");


// include test
var array1 = [1, 2, 3];
console.assert(array1.includes(2) === new List(array1).includes(2),
    "include test 2 failed");
// expected output: true
const pets = ['cat', 'dog', 'bat'];
console.assert(pets.includes('cat') === new List(pets).includes('cat'),
    "include test 2 failed");
// expected output: true
console.assert(pets.includes('at') === new List(pets).includes('at'),
    "include test 3 failed");
// expected output: false


// indexOf test
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.assert(beasts.indexOf('bison') === new List(beasts).indexOf('bison'),
    "indexOf test 1 failed");
// expected output: 1
// start from index 5 - 2 = 3
console.assert(beasts.indexOf('bison', -2) === new List(beasts).indexOf('bison', -2),
    "indexOf test 2 failed");
// expected output: 4
console.assert(beasts.indexOf('giraffe') === new List(beasts).indexOf('giraffe'),
    "indexOf test 3 failed");
// expected output: -1


// join test
var elements = ['Fire', 'Air', 'Water'];
console.assert(elements.join() === new List(elements).join(), "join test 1 failed");
// expected output: "Fire,Air,Water"
console.assert(elements.join('') === new List(elements).join(''), "join test 2 failed");
// expected output: "FireAirWater"
console.assert(elements.join('-') === new List(elements).join('-'), "join test 3 failed");
// expected output: "Fire-Air-Water"


// keys test
var array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
const iterator1 = new List(array1).keys();
for (var i = 0; i < array1.length; ++i) {
    console.assert(iterator.next().value === iterator1.next().value, "keys test failed");
}
// expected output: 0
// expected output: 1
// expected output: 2

console.assert(new List(array1).length === 3, "length test failed");

// from test
var a = [1, 2, 3];
var fromTest = new List(a);
console.assert(fromTest.get(1) === a[1], "get method failed");

// isList test
var a = [1, 2, 3];
var isListTest = new List(a);
console.assert(List.isList(isListTest), "isList test failed");
console.assert(!List.isList(a), "isList test failed");

// of test
var a = [1, 2, 3];
var ofTest = List.of(1, 2, 3);
console.assert(ofTest.get(1) === 2, "of test failed");

// concate test
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [1, 2, 3, 4, 5, 6];
var concateA = new List(a);
var concateB = new List(b);
var assumeReuslt = new List(c);
for (let i = 0; i < concateA.concate(concateB).length; i++) {
    console.assert(concateA.concate(concateB).toArray()[i] === assumeReuslt.get(i), "concate test failed");
}
// copyWithin test
var a = ['a', 'b', 'c', 'd', 'e'];
var b = ['d', 'b', 'c', 'd', 'e'];
var copyWithinTest = new List(a).copyWithin(0, 3, 4);
var assumeReuslt = new List(b);
for (let i = 0; i < copyWithinTest.length; i++) {
    console.assert(copyWithinTest.toArray()[i] === assumeReuslt.get(i), "copyWithin test failed");
}


// test checkEvery
var isBelowThreshold = (currentValue) => currentValue < 40;
var a = [1, 30, 39, 29, 10, 13];
var testCheckEvery = new List(a);
console.assert(testCheckEvery.checkEvery(isBelowThreshold), "test checkEvery failed");

//test fill
var a = [1, 2, 3, 4];
var b = [1, 2, 0, 0];
var testFill = new List(a).fill(0, 2, 4);
var assumeReuslt = new List(b);
for (let i = 0; i < testFill.length; i++) {
    console.assert(testFill.toArray()[i] === assumeReuslt.get(i), "copyWithin test failed");
}
//test filter
var a = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var b = ["exuberant", "destruction", "present"];
var testFilter = new List(a).filter(word => word.length > 6);
var assumeReuslt = new List(b);
for (let i = 0; i < testFilter.length; i++) {
    console.assert(testFilter.toArray()[i] === assumeReuslt.get(i), "copyWithin test failed");
}

// =======
// flaw-3
var a = [1, 2, 3, 1];
var list = new List(a);
console.assert(list.get(1) === 2, "get test failed");

console.assert(list.lastIndexOf(1) === 3, "lastIndexOf test failed");
console.assert(list.lastIndexOf(1, -2) === 0, "lastIndexOf test failed");

let l2 = list.map(v => v * v);
console.assert(l2.equals(new List([1, 4, 9, 1])), "map test failed");
let r = l2.reduce((a, b) => a + b);
console.assert(r === 15, "reduce test failed");
r = l2.reduceRight((a, b) => a + b);
console.assert(r === 15, "reduceRight test failed");

console.assert(list.reverse().equals(new List([1, 3, 2, 1])), "reverse test failed");

// =======
// flaw-4

let array4 = [1, 2, 3];
let list4 = new List(array4);


// toString test
const toStringTest = new List([1, 2, 3]);
console.assert("[1,2,3]" === toStringTest.toString(), "toString() test failed.");

// when list is nested
let nestedArray = [1, 2, [3, [4, 5]]];
let nestedList = new List(nestedArray);
console.assert("[1,2,[3,[4,5]]]" === nestedList.toString(), "nestedList toString() test failed.");
console.assert("1,2,3,4,5" === nestedArray.toString(), "nestedArray toString() test failed.");

// slice test

// case1: no argument
let slicedNoArg = list4.slice();
console.assert("[1,2,3]" === slicedNoArg.toString(), "slicedNoArg slice() test failed.");

// case2: only start
let slicedStart = list4.slice(1);
console.assert("[2,3]" === slicedStart.toString(), "slicedStart slice() test failed.");

// case3: only end
let sliced = list4.slice(0, 2);
console.assert("[1,2]" === sliced.toString(), "sliced slice() test failed.");


// toLocaleString() test
let amountsArray = [1, 2, 3, [4, 5]];
console.assert("￥1,￥2,￥3,￥4,￥5" === amountsArray.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }),
    "amountsArray toLocalString() test failed");

console.assert("[￥1,￥2,￥3]" === list4.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }),
    "list4 toLocaleString() test failed");

console.assert("[￥1,￥2,[￥3,[￥4,￥5]]]" === nestedList.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }),
    "nestedList toLocaleString() test failed");


// concateFront test

list4.concateFront([4, 5, 6])
console.assert("[4,5,6,1,2,3]" === list4.toString(), "Test concateFront() on array input failed")


list4.concateFront(nestedList)
console.assert("[1,2,[3,[4,5]],4,5,6,1,2,3]" === list4.toString(), "Test concateFront() on list input failed")

// iterator test
const arr = ['a', 'b', 'c', 'd', 'e'];
const iteratorTest = new List(arr);
const eList = iteratorTest[Symbol.iterator]();
console.assert(eList.next().value === 'a', "iterator test failed");
console.assert(eList.next().value === 'b', "iterator test failed");


// Exception test
try {
    var x = new List("alskjf");
    console.log("Constructor not throwing exception");
} catch (e) {
    console.assert(e instanceof TypeError, "Constructor throws wrong exception");
}

// sort test
var a = [71, 8, 9];
var list = new List(a);
console.assert(list.sort().equals(new List([8, 9, 71])), "Sort test 1 failed");

var d1 = new Date(2020, 12, 24);
var d2 = new Date(2020, 12, 25);
var d3 = new Date(2020, 12, 26);
var a = [d3, d2, d1];
var list = new List(a);
console.assert(list.sort().equals(new List([d1, d2, d3])), "Sort test 2 failed");


// equals test
var a = new List([[1, 2], 3, [[4]]]);
var b = new List([[1, 2], 3, [[4]]]);
console.assert(a.equals(b) === true, "equals test 1 failed");

// IllegalArgumentError test
try {
    console.log(a.flat(-100));
} catch(e) {
    console.assert(e instanceof IllegalArgumentError, "IllegalArgumentError test failed");
}

// add test
var a = new List([1,2,3]);
a.add(4, 5);
console.assert(a.get(4) === 5, "add test failed");

//remove test
a.remove(2);
console.assert(a.length === 4, "remove test 1 failed");
try {
    a.remove("abc");
} catch (e) {
    console.assert(e instanceof TypeError, "remove test 2 failed");
}
try {
    a.remove(-5);
} catch (e) {
    console.assert(e instanceof IllegalArgumentError, "remove test 3 failed");
}
