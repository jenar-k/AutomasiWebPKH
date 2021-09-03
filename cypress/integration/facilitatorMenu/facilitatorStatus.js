describe('Change Status Facilitator PKH', function () {
    it('TC-01 Inactive status facilitator', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Satu', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.contains('Nonaktifkan').click();
        cy.wait(1000);
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('button').contains('OK').click();
        cy.get('.odd > :nth-child(4)').should('have.text', 'Nonaktif');
    })

    it('TC-02 Activate status facilitator', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Satu', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.contains('Aktifkan').click();
        cy.wait(1000);
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('button').contains('OK').click();
        cy.get('.odd > :nth-child(4)').should('have.text', 'Aktif');
    })
})