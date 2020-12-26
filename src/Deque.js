/**
 * The Deque class that provides the functionalities of a Double Ended Queue.
 *
 */
class Deque {
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
     * Create a new, shallow-copied Deque instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Deque.
     * @return {List} A new Deque instance.
     */
    static from(iterable) {
        let newArray = Array.from(iterable);
        return new Deque(newArray);
    }

    /**
     * Create a new, shallow-copied Deque instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Deque.
     * @param {function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @return A new Deque instance.
     */
    static from(iterable, mapFn) {
        let newArray = Array.from(iterable, mapFn);
        return new Deque(newArray);
    }

    /**
     * Create a new, shallow-copied Deque instance from an array-like or iterable object.
     * @param {Iterable} iterable An array-like or iterable object to convert to an Deque.
     * @param {function} mapFn Optional. Map function to call on every element of the array-like or iterable object.
     * @param {Object} thisArg Optional. Value to use as this when executing mapFn.
     * @return A new Deque instance.
     */
    static from(iterable, mapFn, thisArg) {
        let newArray = Array.from(iterable, mapFn, thisArg);
        return new Deque(newArray);
    }

    /**
     * Determine whether the passed value is an Deque.
     * @param {Object} value The value to be checked.
     * @return {Boolean} true if the value is an Deque; otherwise, false.
     */
    static isDeque(value) {
        return value instanceof Deque;
    }

    /**
     * Create a new Deque instance from a variable number of arguments, regardless of number or type of the arguments.
     * @param {Object} elementN Elements used to create the List.
     * @return {Deque} A new Deque instance.
     */
    static of(...elements) {
        return new Deque(Array.of(...elements));
    }

    /**
     * Create a new Deque with all elements that pass the test implemented by the provided function.
     * @param {Function} callback Function is a predicate, to test each element of the Deque. Return a value that coerces to true to keep the element, or to false otherwise.
     * @return {Deque} A new Deque instance.
     */
    filter(callback) {
        return new Deque(this.#array.filter(callback));
    }

    /**
     * Convert the Deque object to an Array object that contains all the shadow copy of elements.
     * @return {Array} original Array representing the current Deque.
     */
    toArray() {
        return Array.from(this.#array);
    }

    /**
     * Check whether this Deque is the same as another Deque, both of the Deque should only have one layer.
     *
     * This method can also check the equivalence of internal Deque or internal array recursively as long as
     * there are only elements with data types that can be checked by `===`.
     *
     * If the two Deque have different length, return false.
     *
     * If the type of two elements at the same index are different, return false.
     *
     * If the otherDeque is not a Deque object, return false.
     *
     * @param {Deque, Array} otherDeque Another Deque
     *
     * @return {Boolean} True if two Deque are the same, false otherwise
     */
    equals(otherDeque) {
        if (!otherDeque instanceof Deque) {
            return false;
        }
        if (this.length !== otherDeque.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {
            const thisElement = this.#array[i];
            const otherElement = otherDeque.toArray()[i];
            if ((thisElement instanceof Deque && otherElement instanceof Deque)
                || (thisElement instanceof Array && otherElement instanceof Array)) {
                const newDeque = new Deque(thisElement);
                const newOtherDeque = new Deque(otherElement);
                if (!newDeque.equals(newOtherDeque)) {
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
     * Returns a string representing all the queue values,
     * Return the length of the deque.
     * @return {Number} The length of the deque.
     */
    get length() {
        return this.#array.length;
    }

    /**
     * Remove the first element from the head of the deque and returns that removed element.
     * @return {Object} The removed element.
     */
    removeFirst() {
        return this.#array.shift();
    }

    /**
     * Add one or more elements to the head of the deque.
     * @param {Object} args The element(s) to add to the head of the deque.
     */
    addFirst(...args) {
        this.#array.unshift(...args);
    }

    /**
     * Remove the last element from the tail of the deque and returns that removed element.
     * @return {Object} The removed element.
     */
    removeLast() {
        return this.#array.pop();
    }

    /**
     * Add one or more elements to the tail of the deque.
     * @param {Object} args The element(s) to add to the tail of the deque.
     */
    addLast(...args) {
        this.#array.push(...args);
    }

    /**
     * Get the first element in the deque.
     * @return {Object} The head element.
     */
    peekFirst() {
        return this.#array[0];
    }

    /**
     * Get the last element in the deque.
     * @return {Object} The tail element.
     */
    peekLast() {
        return this.#array[this.#array.length - 1];
    }

    /**
     * Returns a string representing all the queue values,
     * separated by commas "," and wrappted with brackets "[]"
     * @return {String} a string representation of the Dequeue
     */
    toString() {
        return JSON.stringify(this.#array);
    }

    /**
     * Execute the method once for each Deque element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Deque, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     */
    forEach(callbackFn) {
        this.#array.forEach(callbackFn);
    }

    /**
     * Execute the method once for each Deque element.
     *
     * This is a void function, return value will be undefined.
     *
     * This function may or may not change the original Deque, depending on the input method.
     *
     * @param {Function} callbackFn The callbackFn that apply on each element
     * @param {Object} thisArg Object to use as `this` inside callback function
     */
    forEach(callbackFn, thisArg) {
        this.#array.forEach(callbackFn, thisArg);
    }

    /**
     * This method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
     * @return A Deque iterator
     */
    [Symbol.iterator]() {
        return this.#array[Symbol.iterator]();
    }

    /**
     * An accessor static property that returns the Deque constructor.
     * @return The Deque constructor.
     */
    static get [Symbol.species]() {
        return Deque;
    }

}

module.exports = Deque;
