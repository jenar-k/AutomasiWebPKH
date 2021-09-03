describe('Ubah sandi salah satu user facilitator PKH', function () {
    it('TC-01 Sudah memasukkan data password baru tetapi Batal Ubah', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Dua', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/edit/245"]').contains('Ubah').click();
        cy.get('#user_password',{force:true}).type('123456789').should('have.value', '123456789');
        cy.get('.btn-outline-primary').contains('Batal').click();
        cy.get('.h3 > b').should('have.text', 'Facilitator');
        cy.stepLogout();
    })

    it('TC-02 Sudah memasukkan data password baru dan simpan perubahan', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.get('#dataTable_filter > label > .form-control').type('Jenar Dua', {force:true});
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/edit/245"]').contains('Ubah').click();
        cy.get('#user_password',{force:true}).type('123456789').should('have.value', '123456789');
        cy.get('#edit').contains('Simpan').click();
        cy.get('#modal-title').should('have.text', 'Success');
        cy.stepLogout();
    })
})