const {fibonacciForDesiredSequence} = require("../../main/functions/ClassicFibonacci");

describe('Tests for Fibonacci to Desired  Sequence', () => {

    it('should return the numbers for Fib Sequence from given amount (10)', () => {
        const expectedFibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        let returnedFibSequence = fibonacciForDesiredSequence(10);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return the numbers for Fib Sequence from given amount (20)', () => {
        const expectedFibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];

        let returnedFibSequence = fibonacciForDesiredSequence(20);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return an empty array when passing 0', () => {
        const expectedFibSequence = [];

        let returnedFibSequence = fibonacciForDesiredSequence(0);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return Fib Sequence only containing 0 when passing in 1', () => {
        const expectedFibSequence = [0];

        let returnedFibSequence = fibonacciForDesiredSequence(1);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return Fib Sequence only containing 0, 1 when passing in 2', () => {
        const expectedFibSequence = [0, 1];

        let returnedFibSequence = fibonacciForDesiredSequence(2);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return an empty array when passing NaN', () => {
        const expectedFibSequence = [];
        let Nan;

        let returnedFibSequence = fibonacciForDesiredSequence(Nan);

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })
})
