describe('Check error message displays for negative numbers', () => {
    it('Visit Fib Kata app', () => {
        cy.visit('http://localhost:3000');
    })

    it('should enter a negative number ',  () => {
        cy.get('#seq_number').type('-5');
    });

    it('should check error message displays ',  () => {
        cy.get('#errorMsg').should('contain.text', "Please enter a positive number");
    });
})

describe('Check error message is removed when not a negative number', () => {
    it('Visit Fib Kata app', () => {
        cy.visit('http://localhost:3000');
    })

    it('should enter a negative number ',  () => {
        cy.get('#seq_number').type('-5');
    });

    it('should check error message displays ',  () => {
        cy.get('#errorMsg').should('contain.text', "Please enter a positive number");
    });

    it('should clear input field and enter a positive number ',  () => {
        cy.get('#seq_number').clear();
        cy.get('#seq_number').type('5');
    });

    it('should check error message no longer displays ',  () => {
        cy.get('#errorMsg').should('not.contain.text', "Please enter a positive number");
    });
})

describe('Check decimal numbers do not break functionality', () => {
    it('Visit Fib Kata app', () => {
        cy.visit('http://localhost:3000');
    })

    it('should enter a decimal number',  () => {
        cy.get('#seq_number').type('5.5');
    });

    const fibSequenceOf10 = [0, 1, 1, 2, 3];

    fibSequenceOf10.map((number) => (
        it('Check ' + number + ' is displayed', () => {
            cy.get(".numberBlock_" + number).should('contain.text', number)
        })
    ))
})

