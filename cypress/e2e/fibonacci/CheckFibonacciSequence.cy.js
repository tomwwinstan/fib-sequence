describe('Check Fibonacci Sequence of 10 displays correctly', () => {

    it('Visit Fib Kata app', () => {
        cy.visit('http://localhost:3000');
    })

    it('should enter 10 for sequence amount',  () => {
        cy.get('#seq_number').type('10');
    });

    const fibSequenceOf10 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    fibSequenceOf10.map((number) => (
        it('Check ' + number + ' is displayed', () => {
            cy.get(".numberBlock_" + number).should('contain.text', number)
        })
    ))
})
