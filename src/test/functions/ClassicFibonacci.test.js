import classicFibonacci, {
    fibonacciToEnteredNumber
} from '../../main/functions/ClassicFibonacci';

describe('classicFibonacci', () => {
    it('should return classic Fib Sequence', () => {
        const expectedFibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

        let returnedFibSequence = classicFibonacci();

        expect(expectedFibSequence).toStrictEqual(returnedFibSequence);
    })

    it('should return classic Fib Sequence to number desired', () => {
        const expectedFibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

        let returnedFibSequence = fibonacciToEnteredNumber(144);

        expect(returnedFibSequence).toStrictEqual(expectedFibSequence);
    })

})
