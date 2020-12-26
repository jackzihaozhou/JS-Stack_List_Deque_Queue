/**
 * An IllegalArgumentError class.
 * This error will be thrown if the argument is illegal.
 */
class IllegalArgumentError extends Error {
    constructor(...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, IllegalArgumentError)
        }
        this.name = 'IllegalArgumentError';
    }
}
module.exports = IllegalArgumentError;
