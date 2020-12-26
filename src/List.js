/**
 * The List class that provides the functionalities of a List.
 *
 * Optimized for random access
 */

const Queue = require('./Queue');
const Stack = require('./Stack');
const Deque = require('./Deque');
const IllegalArgumentError = require('./IllegalArgumentError');

class List {
    /**
     * Private underlying array.
     */
    #array;

    /**
     * The constructor that takes an original array as input.
     * @param {Array, List, Queue, Stack, Deque} originArray An Array/List/Queue/Stack/Deque object
     */
    constructor(originArray) {
        // Can only accept Array, Queue, Stack, Deque type argument
        if (!(originArray instanceof Array
            || originArray instanceof List
            || originArray instanceof Queue
            || originArray instanceof Stack
            || originArray instanceof Deque)) {
            throw TypeError("Can only take Array/List/Queue/Stack/Deque type object as argument");
        }
        if (originArray instanceof Array) {
            this.#array = Array.from(originArray);
        } else {
            this.#array = Array.from(originArray.toArray());
        }
    }

    /**
     * Get the element at the specific index.
     * @param {Number} index the index in the List
     * @return {Object} the element at the specific index
     */
    get(index) {
        return this.#array[index];
    }

    /**
     * Set the value at specified index.
     * @param {Number} index The index in the List.
     * @param {Object} value The value to set at the index place.
     */
    set(index, value) {
        this.#array[index] = value;
    }

    /**
     * Create a new, shallow-copied List instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an List.
     * @return {List} A new List instance.
     */
    static from(iterable) {
        let newArray = Array.from(iterable);
        return new List(newArray);
    }

    /**
     * Create a new, shallow-copied List instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an List.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @return {List} A new List instance.
     */
    static from(iterable, mapFn) {
        let newArray = Array.from(iterable, mapFn);
        return new List(newArray);
    }

    /**
     * Create a new, shallow-copied List instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an List.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @param {Object} thisArg Optional. Value to use as this when executing mapFn.
     * @return {List} A new List instance.
     */
    static from(iterable, mapFn, thisArg) {
        let newArray = Array.from(iterable, mapFn, thisArg);
        return new List(newArray);
    }

    /**
     * Determine whether the passed value is an List.
     * @param {Object} value The value to be checked.
     * @return {Boolean} true if the value is an List; otherwise, false.
     */
    static isList(value) {
        return value instanceof List;
    }

    /**
     * Create a new List instance from a variable number of arguments, regardless of number or type of the arguments.
     * @return {List} A new List instance.
     * @param elements
     */
    static of(...elements) {
        return new List(Array.of(...elements));
    }

    /**
     * Merge two List. This method does not change the existing List, but instead returns a new List.
     * @return {List} A new concated List instance.
     * @return {List} Merged new List.
     */
    concate(list) {
        return new List(this.#array.concat(list.toArray()));
    }

    /**
     * Shallow copies part of an list to another location in the same list and returns it without modifying its length.
     * @param {Number} target Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
     * @return {List} A new List instance.
     */
    copyWithin(target) {
        this.#array.copyWithin(target);
        return this;
    }

    /**
     * Shallow copies part of an list to another location in the same list and returns it without modifying its length.
     * @param {Number} target Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
     * @param {Number} start Optional. Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
     * @return {List} A new List instance.
     */
    copyWithin(target, start) {
        this.#array.copyWithin(target, start);
        return this;
    }

    /**
     * Shallow copies part of an list to another location in the same list and returns it without modifying its length.
     * @param {Number} target Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
     * @param {Number} start Optional. Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
     * @param {Number} end Optional. Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.
     * @return {List} A new List instance.
     */
    copyWithin(target, start, end) {
        this.#array.copyWithin(target, start, end);
        return this;
    }

    /**
     * Shallow copies part of an list to another location in the same list and returns it without modifying its length.
     * @param {Function} callback A function to test for each element, taking three arguments:index (Optional), array (Optional) and thisArg (Optional).
     * @return {List} A new List instance.
     */
    checkEvery(callback) {
        return this.#array.every(callback);
    }

    /**
     * Change all elements in this list to a static value, from a start index (default 0) to an end index (default the length of the list). It returns the modified List.
     * @param {Object} value Value to fill the list with.
     * @return {List} The modified list, filled with value.
     */
    fill(value) {
        this.#array.fill(value);
        return this;
    }

    /**
     * Change all elements in this list to a static value, from a start index (default 0) to an end index (default the length of the list). It returns the modified List.
     * @param {Object} value Value to fill the list with.
     * @param {Number} start Optional. Start index, default 0.
     * @return {List} The modified list, filled with value.
     */
    fill(value, start) {
        this.#array.fill(value, start);
        return this;
    }

    /**
     * Change all elements in this list to a static value, from a start index (default 0) to an end index (default the length of the list). It returns the modified List.
     * @param {Object} value Value to fill the list with.
     * @param {Number} start Optional. Start index, default 0.
     * @param {Number} end Optional. End index, default the length of the list.
     * @return {List} The modified list, filled with value.
     */
    fill(value, start, end) {
        this.#array.fill(value, start, end);
        return this;
    }

    /**
     * Create a new List with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the List. Return a value that coerces to true to keep the element, or to false otherwise.
     * @return {List} A new List instance.
     */
    filter(callback) {
        return new List(this.#array.filter(callback));
    }

    /**
     * Find the value of the first element in the list that satisfies the callback function.
     *
     * If no value satisfies the callback function, return `undefined`.
     *
     * @param {Function} callbackFn The method that validates elements in the list
     * @returns {Object} The first element in the list that satisfies the callback function
     *                   or `undefined` if no value satisfies the callback function
     */
    find(callbackFn) {
        return this.#array.find(callbackFn);
    }

    /**
     * Find the value of the first element in the list that satisfies the callback function.
     * @param {Function} callbackFn The method that validates elements in the list
     * @param {Object} thisArg Object to use as `this` inside callback function
     * @return {Object} The first element in the list that satisfies the callback function
     *                   or `undefined` if no value satisfies the callback function
     */
    find(callbackFn, thisArg) {
        return this.#array.find(callbackFn, thisArg);
    }

    /**
     * Find the index of the first element in the list that satisfies the callback function.
     *
     * If no value satisfies the callback function, return -1.
     *
     * @param {Function} callbackFn The method that validates elements in the list
     * @returns {Number} The index of the first element in the list that satisfies the callback function
     *                   or -1 if no value satisfies the callback function
     */
    findIndex(callbackFn) {
        return this.#array.findIndex(callbackFn);
    }

    /**
     * Find the index of the first element in the list that satisfies the callback function.
     *
     * If no value satisfies the callback function, return -1.
     *
     * @param {Function} callbackFn The method that validates elements in the list
     * @param {Object} thisArg Object to use as `this` inside callback function
     * @returns {Number} The index of the first element in the list that satisfies the callback function
     *                   or -1 if no value satisfies the callback function
     */
    findIndex(callbackFn, thisArg) {
        return this.#array.findIndex(callbackFn, thisArg);
    }

    /**
     * Create a new list with all internal list elements flatten by specified depth then concatenated into it.
     *
     * This function will not change the original list.
     *
     * @param {Number} depth The max depth of the internal list, depth means the number of layers that the internal list have.
     *                       e.g. [1, [[2], 3], 4] the depth of internal list [[2], 3] is 2.
     *                       If depth = 0, the flatted list will be the same as the original list
     *                       if depth < 0, throw IllegalArgumentError
     *                       if depth is not a number, throw TypeError
     * @return {List} A new list with all internal list flatten by specified depth then concatenated into it
     * @throw TypeError if the depth is not a Number
     *        IllegalArgumentError if the depth < 0
     */
    flat(depth) {
        if (depth === undefined) {
            depth = 1;
        }
        if (!Number.isFinite(depth)) {
            throw TypeError("flat() Can only take Number as depth");
        }
        if (depth < 0) {
            throw new IllegalArgumentError("depth cannot be smaller than 0");
        }
        const array = this.toArray();
        return new List(array.flat(depth));
    }

    /**
     * Create a new list formed by applying a given callback function to each element of the list,
     * and then flattening the result by one level.
     *
     * It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than
     * calling those two methods separately.
     *
     * @param {Function} callbackFn The method that apply on each element
     * @returns {List} A new list formed by applying a given function to each element then flatten by one level
     */
    flatMap(callbackFn) {
        const array = this.toArray();
        return new List(array.flatMap(callbackFn));
    }

    /**
     * Create a new list formed by applying a given callback function to each element of the list,
     * and then flattening the result by one level.
     *
     * It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than
     * calling those two methods separately.
     *
     * @param {Function} callbackFn The method that apply on each element
     * @param {Object} thisArg Object to use as `this` inside callback function
     * @return {List} A new list formed by applying a given function to each element then flatten by one level
     */
    flatMap(callbackFn, thisArg) {
        const array = this.toArray();
        return new List(array.flatMap(callbackFn, thisArg));
    }

    /**
     * Execute the method once for each list element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original list, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     */
    forEach(callbackFn) {
        this.#array.forEach(callbackFn);
    }

    /**
     * Execute the method once for each list element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original list, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     * @param {Object} thisArg Object to use as `this` inside callback function
     */
    forEach(callbackFn, thisArg) {
        this.#array.forEach(callbackFn, thisArg);
    }

    /**
     * Determine whether the list contains the specified element.
     *
     * @param {Object} element The element that want to find
     *
     * @return {Boolean} True if the list contains the element
     *             false otherwise
     */
    includes(element) {
        return this.#array.includes(element);
    }

    /**
     * Determine whether the list contains the specified element, start from the specified index
     *
     * @param element the element that want to find
     * @param startIndex the index that the search starts from
     *                   If index < 0, it is taken as the offset from the end of the list
     *
     * @return {*} true if the list contains the element start from the specified index
     *             false otherwise
     */
    includes(element, startIndex) {
        return this.#array.includes(element, startIndex);
    }

    /**
     * Get the first index at which a given element can be found in the list.
     * @param element the element that want to find
     */
    indexOf(element) {
        return this.#array.indexOf(element);
    }

    /**
     * Get the first index at which a given element can be found in the list, start from the specified index.
     *
     * @param element the element that want to find
     * @param startIndex the index that the search starts from
     *                   If index < 0, it is taken as the offset from the end of the list
     *
     * @return {*} The first index at which a given element can be found in the list, start from the specified index
     *             or -1 if it is not present
     * @throw TypeError if the startIndex is not a Number
     *        IllegalArgumentError if the startIndex < -list.length
     */
    indexOf(element, startIndex) {
        if (startIndex !== undefined && !(Number.isFinite(startIndex))) {
            throw TypeError("startIndex only accept a Number");
        }
        if (startIndex < -this.length) {
            throw new IllegalArgumentError("startIndex smaller than -list.length");
        }
        return this.#array.indexOf(element, startIndex);
    }

    /**
     * Create a new string by concatenating all of the elements in an array (or an array-like object),
     * separated by commas. All the internal list will be flatten.
     *
     * @return {String} A new string that contains all the elements in the list separated by commas,
     *                  all the internal list will be flatten.
     *                  If the array has only one item, then the string representation of that item will be directly
     *                  returned.
     */
    join() {
        return this.#array.join();
    }

    /**
     * Creates a new string by concatenating all of the elements in an array (or an array-like object),
     * separated by specified separator. All the internal list will be flatten.
     *
     * @param {String} separator The separator that used to separate the elements
     * @return {String} A new string that contains all the elements in the list seperated by the specified sepertor,
     *                  all the internal list will be flatten.
     *                  If the array has only one item, then the string representation of that item will be directly
     *                  returned.
     */
    join(separator) {
        return this.#array.join(separator);
    }

    /**
     * Return a new List Iterator object that contains the keys for each index in the list.
     *
     * @return {Iterator} A new List Iterator object that contains the keys for each index in the list
     */
    keys() {
        return this.#array.keys();
    }

    /**
     * Return the index of the last occurrence of a specified value in a list, or -1 if not present
     * @param {*} searchElement The value to locate in the list.
     * @param {Number} fromIndex The list index at which to begin the search backwards. If fromIndex is omitted, the search starts at the last index in the list.
     * @return {Number} the index of the last occurrence of a specified value in a list, or -1 if not present
     */
    lastIndexOf(searchElement, fromIndex) {
        return fromIndex
            ? this.#array.lastIndexOf(searchElement, fromIndex)
            : this.#array.lastIndexOf(searchElement);
    }

    /**
     * Call a defined callback function on each element of a list, and returns a list that contains the results.
     * @param {Function} callbackFn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the list.
     * @param {Object} thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     * @return {List} a new List of applying the callback function on each element of a list
     */
    map(callbackFn, thisArg) {
        return new List(this.#array.map(callbackFn, thisArg));
    }

    /**
     * Call the specified callback function for all the elements in a list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param {Function} callbackFn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the list.
     * @param {Number} initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of a list value.
     * @return {Number} the reduced value
     */
    reduce(callbackFn, initialValue) {
        return this.#array.reduce(callbackFn, initialValue || 0);
    }

    /**
     * Call the specified callback function for all the elements in a list, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param {Function} callbackFn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the list.
     * @param {Number} initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     * @return {Number} the reduced-right value
     */
    reduceRight(callbackFn, initialValue) {
        return this.#array.reduceRight(callbackFn, initialValue || 0);
    }

    /**
     * Reverse the elements in a list.
     * @return {List} a reference to this list
     */
    reverse() {
        this.#array.reverse();
        return this;
    }

    /**
     * Return the selected elements in a list, as a new list object.
     *
     * The slice() method selects the elements starting at the given start argument, and ends at,
     * but does not include, the given end argument.
     *
     * @param {Number} start Optional. An integer that specifies where to start the selection (The first element has an index of 0).
     *                 If omitted, it acts like "0"
     *                 Use negative numbers to select from the end of an array.
     * @param {Number} end Optional. An integer that specifies where to end the selection.
     *                 If omitted, all elements from the start position and to the end of the array will be selected.
     *                 Use negative numbers to select from the end of an array.
     */
    slice(start = 0, end) {
        return new List(this.#array.slice(start, end));
    }

    /**
     * Insert multiple elements into a specific index.
     * @param {Number} index The index to insert, if -list.length <= index < 0, index will be treated as
     *                 the offset from the end of list.
     * @param elements Multiple elements
     * @throw TypeError if the index is not a Number
     *        IllegalArgumentError if the index < -list.length
     */
    insert(index, ...elements) {
        if (!Number.isFinite(index)) {
            throw TypeError("Index only accept a Number");
        }
        if (index < -this.length) {
            throw new IllegalArgumentError("Index smaller than -list.length");
        }
        this.#array.splice(index, 0, ...elements);
    }

    /**
     * Add elements to the end of the list.
     * @param elements elements to add
     */
    add(...elements) {
        this.#array.splice(this.length, 0, ...elements);
    }

    /**
     * Remove a specified number of elements start from the index.
     * @param {Number} index Start index
     * @throw TypeError if the index is not a Number
     *        IllegalArgumentError if the index < -list.length
     */
    remove(index) {
        if (!Number.isFinite(index)) {
            throw TypeError("Index only accept a Number");
        }
        if (index < -this.length) {
            throw new IllegalArgumentError("Index smaller than -list.length");
        }
        this.#array.splice(index, 1);
    }

    /**
     * Remove a specified number of elements start from the index.
     * @param {Number} index Start index
     * @param {Number} removeNum Number of elements to remove
     * @throw TypeError if the index is not a Number
     *        IllegalArgumentError if the index < -list.length
     */
    remove(index, removeNum) {
        if (removeNum === undefined) {
            removeNum = 1;
        }
        if (!Number.isFinite(index)) {
            throw TypeError("Index only accept a Number");
        }
        if (!Number.isFinite(removeNum)) {
            throw TypeError("removeNum only accept a Number");
        }
        if (index < -this.length) {
            throw new IllegalArgumentError("Index smaller than -list.length");
        }
        this.#array.splice(index, removeNum);
    }

    /**
     * Returns a string representing all the queue values,
     * separated by commas "," and wrappted with brackets "[]"
     * @return {String} A string representation of the list
     */
    toString() {
        return JSON.stringify(this.#array);
    }


    /**
     * Return a localized string representing the elements of the array.
     * The elements are converted to Strings using their toLocaleString methods
     * and these Strings are separated by comma ","
     *
     * @param {Intl.Locale} locales Optional. A string with a BCP 47 language tag,
     *                      or an array of such strings.
     *                      For the general form and interpretation of the locales argument, see the Intl page.
     * @param {Object} options Optional. An object with configuration properties, for numbers see Number.prototype.toLocaleString(),
     *                and for dates see Date.prototype.toLocaleString().
     * @return {String} A localized string representing the elements of the array
     *
     */
    toLocaleString(locales, options) {
        function toLocaleStringHelper(locales, options, item) {
            if (!(item instanceof Array)) {
                return item.toLocaleString(locales, options);
            } else {
                let internalArray = item.map(internalItem => {
                    return toLocaleStringHelper(locales, options, internalItem);
                });
                return internalArray;
            }
        }

        let newArr = this.#array.map(item => {
            return toLocaleStringHelper(locales, options, item);
        });
        // strip quotion marks " between elements  (naive implementation)
        let newStr = JSON.stringify(newArr).split("\"").join("");
        return newStr;
    }

    /**
     * Concatenate an array or a list to the front, and return the new length.
     * This function will modify the existing list.
     * @param {Array, List} anotherObj An array or list to be appended to the front
     * @return {number} Length of the modified list
     * @throw TypeError if the input is not an Array/List/Queue/Stack/Deque
     */
    concateFront(anotherObj) {
        if (!(anotherObj instanceof Array
            || anotherObj instanceof List
            || anotherObj instanceof Queue
            || anotherObj instanceof Stack
            || anotherObj instanceof Deque)) {
            throw TypeError("Can only take Array/List/Queue/Stack/Deque type object as argument");
        }

        let anotherArray = [];
        if (anotherObj instanceof Array) { // if the parameter is an array
            anotherArray = anotherObj;
        } else { // if not a list or array, return undifined
            anotherArray = anotherObj.#array;
        }
        for (let i = anotherArray.length - 1; i >= 0; i--) {
            this.#array.unshift(anotherArray[i]);
        }
        return this;
    }

    /**
     * This method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
     * @return A List iterator
     */
    [Symbol.iterator]() {
        return this.#array[Symbol.iterator]();
    }

    /**
     * An accessor static property that returns the List constructor.
     * @return The List constructor.
     */
    static get [Symbol.species]() {
        return List;
    }


    /**
     * Check whether this list is the same as another list, both of the list should only have one layer.
     *
     * This method can also check the equivalence of internal list or internal array recursively as long as
     * there are only elements with data types that can be checked by `===`.
     *
     * If the two list have different length, return false.
     *
     * If the type of two elements at the same index are different, return false.
     *
     * If the otherList is not a List object, return false.
     *
     * @param {List, Array} otherList Another list
     *
     * @return {Boolean} True if two lists are the same, false otherwise
     */
    equals(otherList) {
        if (!otherList instanceof List) {
            return false;
        }
        if (this.length !== otherList.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            const thisElement = this.get(i);
            const otherElement = otherList.get(i);
            if ((thisElement instanceof List && otherElement instanceof List)
                || (thisElement instanceof Array && otherElement instanceof Array)) {
                const newList = new List(thisElement);
                const newOtherList = new List(otherElement);
                if (!newList.equals(newOtherList)) {
                    return false;
                }
                continue;
            }
            if (thisElement !== otherElement) {
                return false;
            }
        }
        return true;
    }

    /**
     * Return the length of the list.
     * @return {Number} The length of the list
     */
    get length() {
        return this.#array.length;
    }

    /**
     * Convert the List object to an Array object that contains all the shadow copy of elements.
     * @return {Array} original Array representing the current List.
     */
    toArray() {
        return Array.from(this.#array);
    }

    /**
     * Sort the given list according to the following rule
     * @param {Function} compareFn An optional compare function to be used
     * @returns a reference to this list
     */
    sort(compareFn) {
        if (this.length === 0) return this;
        if (this.#array[0] instanceof Date) {
            if (this.#array.every(e => e instanceof Date)) {
                if (compareFn) {
                    this.#array.sort(compareFn);
                } else {
                    this.#array.sort((a, b) => a - b);
                }
            } else {
                this.#array.sort();
            }
        } else {
            if (this.#array.every(e => typeof (e) === typeof (this.#array[0]))) {
                if (compareFn) {
                    this.#array.sort(compareFn);
                } else {
                    this.#array.sort((a, b) => a - b);
                }
            } else {
                this.#array.sort();
            }
        }
        return this;
    }
}

module.exports = List;

