describe('first test', () => {
    it('click kbtechspace home page', () => {
        cy.visit('https://kbtechspace.com');
        cy.contains('ABOUT').click();
        // cy.url().should('include','/about')
    })
})