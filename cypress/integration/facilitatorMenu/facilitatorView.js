describe('View Facilitator PKH', function () {
    it('TC-01 View Detail dari facilitator PKH', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Satu', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/detail/224"]').contains('Lihat').click();
        cy.get('#user_email').should('have.text', 'jenarsatu@email.com');
    })
})