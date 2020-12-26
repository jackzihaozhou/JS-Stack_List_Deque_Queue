/**
 * The stack class that provides the functionalities of a Stack.
 *
 * First In Last Out
 */
class Stack {
    /**
     * Private underlying array.
     */
    #array;

    /**
     * The constructor that takes an original array as input.
     * @param {Array} originArray original array
     */
    constructor(originArray) {
        // Can only accept Array, Stack, Queue, Deque type argument
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
     * Appends new elements to the stack.
     * @param {Object} items New elements of the Array.
     */
    push(...items) {
        this.#array.push(...items);
    }
    /**
     * Removes the last element from the stack and returns it.
     * @return {Object} The last element.
     */
    pop() {
        return this.#array.pop();
    }
    /**
     * Get the last element from the stack and returns it.
     * @return {Object} The last element.
     */
    peek() {
        return this.#array[this.#array.length - 1];
    }
    /**
     * Create a new, shallow-copied Stack instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Stack.
     * @return {Stack} A new Stack instance.
     */
    static from(iterable) {
        let newArray = Array.from(iterable);
        return new Stack(newArray);
    }

    /**
     * Create a new, shallow-copied Stack instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Stack.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @return {Stack} A new Stack instance.
     */
    static from(iterable, mapFn) {
        let newArray = Array.from(iterable, mapFn);
        return new Stack(newArray);
    }

    /**
     * Create a new, shallow-copied Stack instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Stack.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @param {Object} thisArg Optional. Value to use as this when executing mapFn.
     * @return {Stack} A new Stack instance.
     */
    static from(iterable, mapFn, thisArg) {
        let newArray = Array.from(iterable, mapFn, thisArg);
        return new Stack(newArray);
    }

    /**
     * Determine whether the passed value is an Stack.
     * @param {Object} value The value to be checked.
     * @return {Boolean} true if the value is an Stack; otherwise, false.
     */
    static isStack(value) {
        return value instanceof Stack;
    }

    /**
     * Create a new Stack instance from a variable number of arguments, regardless of number or type of the arguments.
     * @param {Object} elementN Elements used to create the Queue.
     */
    static of(...elements) {
        return new Stack(Array.of(...elements));
    }

    /**
     * Create a new Stack with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the Stack. Return a value that coerces to true to keep the element, or to false otherwise.
     * @return {Stack} A new Stack instance.
     */
    filter(callback) {
        return new Stack(this.#array.filter(callback));
    }

    /**
     * Execute the method once for each Stack element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Stack, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     */
    forEach(callbackFn) {
        this.#array.forEach(callbackFn);
    }

    /**
     * Execute the method once for each Stack element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Stack, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     * @param {Object} thisArg Object to use as `this` inside callback function
     */
    forEach(callbackFn, thisArg) {
        this.#array.forEach(callbackFn, thisArg);
    }

    /**
     * Convert the Stack object to an Array object that contains all the shadow copy of elements.
     * @return {Array} original Array representing the current Stack.
     */
    toArray() {
        return Array.from(this.#array);
    }

    /**
     * Check whether this Stack is the same as another Stack, both of the Stack should only have one layer.
     *
     * This method can also check the equivalence of internal Stack or internal array recursively as long as
     * there are only elements with data types that can be checked by `===`.
     *
     * If the two Stack have different length, return false.
     *
     * If the type of two elements at the same index are different, return false.
     *
     * If the otherStack is not a Stack object, return false.
     *
     * @param {Stack, Array} otherStack Another Stack
     *
     * @return {Boolean} True if two Stack are the same, false otherwise
     */
    equals(otherStack) {
        if (!otherStack instanceof Stack) {
            return false;
        }
        if (this.length !== otherStack.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            const thisElement = this.#array[i];
            const otherElement = otherStack.toArray()[i];
            if ((thisElement instanceof Stack && otherElement instanceof Stack)
                || (thisElement instanceof Array && otherElement instanceof Array)) {
                const newStack = new Stack(thisElement);
                const newOtherStack = new Stack(otherElement);
                if (!newStack.equals(newOtherStack)) {
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
     * Return the length of the stack.
     * @return {Number} The length of the stack.
     */
    get length() {
        return this.#array.length;
    }
    /**
     * Returns a string representing all the Stack values,
     * separated by commas "," and wrappted with brackets "[]"
     * @return a string representation of the Stack
     */
    toString() {
        return JSON.stringify(this.#array);
    }

    /**
     * This method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
     * @return A Stack iterator
     */
    [Symbol.iterator]() {
        let reversedArray = this.#array;
        reversedArray.reverse();
        return reversedArray[Symbol.iterator]();
    }

    /**
     * An accessor static property that returns the Stack constructor.
     * @return The Stack constructor.
     */
    static get [Symbol.species]() {
        return Stack;
    }

}

module.exports = Stack;
