describe('Ubah Facilitator PKH', function () {
    it('TC-01 Ubah data nama Facilitator langsung dari list view', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Satu', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/edit/224"]').contains('Ubah').click();
        cy.wait(1000);
        cy.get('#user_fullname').type(' Satu');
        cy.get('#edit').click();
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
    }),

    it('TC-01 View Detail dari facilitator PKH kemudian ubah data', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin')
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Satu', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/detail/224"]').contains('Lihat').click();
        cy.get('#user_email').should('have.text', 'jenarsatu@email.com');
        cy.get('.btn-outline-primary').click();
        cy.get('#user_fullname').type('{selectall}' , '{backspace}').type('Jenar Satu').should('have.value', 'Jenar Satu');
        cy.get('#edit').click();
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
    })
})