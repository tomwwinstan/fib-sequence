export default function classicFibonacci() {
    let fib = [0, 1];

    for (let i = 2; i <= 10; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

export function fibonacciForDesiredSequence(sequenceAmount) {
    if (sequenceAmount === 0 || isNaN(sequenceAmount)) {
        return [];
    } else if (sequenceAmount === 1) {
        return [0];
    } else {
        let sequence = [0, 1];
        for (let i =2; i < sequenceAmount; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence;
    }
}

export function fibonacciToEnteredNumber(desiredNumber) {
    let no1 = 0, no2 = 1, fibSequence = [0, 1];

    let nextTerm = no1 + no2;

    while (nextTerm < desiredNumber) {
        fibSequence.push(nextTerm);

        no1 = no2;
        no2 = nextTerm;
        nextTerm = no1 + no2;
    }
    return fibSequence;
}
