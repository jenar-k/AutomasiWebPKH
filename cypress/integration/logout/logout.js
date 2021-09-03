describe('Logout dari aplikasi PKH', function () {
    it('TC-01 Admin berhasil Logout dari aplikasi', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.stepLogout();
    }),

    it('TC-02 Admin Batal Logout', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.get('#userDropdown').click({force:true});
        cy.get('.dropdown-menu > [href="#"]').click({force:true})
        cy.get('#exampleModalLabel').should('have.text', 'Ready to Leave?');
        cy.get('#logoutModal > .modal-dialog > .modal-content > .modal-footer').contains('Cancel').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
    })
})
