/**
 * The Queue class that provides the functionalities of a Queue.
 *
 * First In First Out
 */
class Queue {
    /**
     * Private underlying array.
     */
    #array;

    /**
     * The constructor that takes an original array as input.
     * @param {Array} originArray original array
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
     * Remove the first element from the head of the queue and returns that removed element.
     * @return {Object} The head element.
     */
    dequeue() {
        return this.#array.shift();
    }

    /**
     * Add one or more elements to the tail of the queue.
     * @param {Object} args The element(s) to add to the tail of the queue.
     */
    enqueue(...args) {
        this.#array.push(...args);
    }

    /**
     * Get the first element from the head of the queue.
     * @return {Object} The head element.
     */
    peek() {
        return this.#array[0];
    }

    /**
     * Create a new, shallow-copied Queue instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Queue.
     * @returns {Queue} A new Queue instance.
     */
    static from(iterable) {
        let newArray = Array.from(iterable);
        return new Queue(newArray);
    }

    /**
     * Create a new, shallow-copied Queue instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Queue.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @returns {Queue} A new Queue instance.
     */
    static from(iterable, mapFn) {
        let newArray = Array.from(iterable, mapFn);
        return new Queue(newArray);
    }

    /**
     * Create a new, shallow-copied Queue instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Queue.
     * @param {Function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @param {Object} thisArg Optional. Value to use as this when executing mapFn.
     * @returns {Queue} A new Queue instance.
     */
    static from(iterable, mapFn, thisArg) {
        let newArray = Array.from(iterable, mapFn, thisArg);
        return new Queue(newArray);
    }

    /**
     * Determine whether the passed value is an Queue.
     * @param {Object} value The value to be checked.
     * @return {Boolean} true if the value is an Queue; otherwise, false.
     */
    static isQueue(value) {
        return value instanceof Queue;
    }

    /**
     * Creates a new Queue instance from a variable number of arguments, regardless of number or type of the arguments.
     * @param {Object} elementN Elements used to create the Queue.
     * @return {Queue} A new Queue instance.
     */
    static of(...elements) {
        return new Queue(Array.of(...elements));
    }

    /**
     * Create a new Queue with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the Queue. Return a value that coerces to true to keep the element, or to false otherwise.
     * @return {Queue} A new Queue instance.
     */
    filter(callback) {
        return new Queue(this.#array.filter(callback));
    }

    /**
     * Execute the method once for each Queue element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Queue, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     */
    forEach(callbackFn) {
        this.#array.forEach(callbackFn);
    }

    /**
     * Execute the method once for each Queue element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Queue, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     * @param {Object} thisArg Object to use as `this` inside callback function
     */
    forEach(callbackFn, thisArg) {
        this.#array.forEach(callbackFn, thisArg);
    }

    /**
     * Check whether this Queue is the same as another Queue, both of the Queue should only have one layer.
     *
     * This method can also check the equivalence of internal Queue or internal array recursively as long as
     * there are only elements with data types that can be checked by `===`.
     *
     * If the two Queue have different length, return false.
     *
     * If the type of two elements at the same index are different, return false.
     *
     * If the otherQueue is not a Queue object, return false.
     *
     * @param {Queue, Array} otherQueue Another Queue
     *
     * @return {Boolean} True if two Queue are the same, false otherwise
     */
    equals(otherQueue) {
        if (!otherQueue instanceof Queue) {
            return false;
        }
        if (this.length !== otherQueue.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            const thisElement = this.#array[i];
            const otherElement = otherQueue.toArray()[i];
            if ((thisElement instanceof Queue && otherElement instanceof Queue)
                || (thisElement instanceof Array && otherElement instanceof Array)) {
                const newQueue = new Queue(thisElement);
                const newOtherQueue = new Queue(otherElement);
                if (!newQueue.equals(newOtherQueue)) {
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
     * Convert the Queue object to an Array object that contains all the shadow copy of elements.
     * @return {Array} original Array representing the current Queue.
     */
    toArray() {
        return Array.from(this.#array);
    }

    /**
     * Return the length of the queue.
     * @return {Number} The length of the queue.
     */
    get length() {
        return this.#array.length;
    }

    /**
     * Returns a string representing all the queue values,
     * separated by commas "," and wrappted with brackets "[]"
     * @return A string representation of the Queue
     */
    toString() {
        return JSON.stringify(this.#array);
    }

    /**
     * This method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
     * @return A Queue iterator
     */
    [Symbol.iterator]() {
        return this.#array[Symbol.iterator]();
    }

    /**
     * An accessor static property that returns the Queue constructor.
     * @return The Queue constructor.
     */
    static get [Symbol.species]() {
        return Queue;
    }

}

module.exports = Queue;
