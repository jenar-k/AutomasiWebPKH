describe('Login as Admin PKH', function () {
    it('TC-01 login dengan data valid', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.stepLogout();
    }),

    it('TC-02 login dengan data Email Salah', function () {
        cy.mainURL();
        cy.get('#input-email').type('eh@dojobox.id',{force:true}).should('have.value', 'eh@dojobox.id');
        cy.get('#input-password').type('admin',{force:true}).should('have.value', 'admin');
        cy.contains('Login').click({force:true});
        cy.get('#exampleModalLabel').should('have.text', 'Error !');
        cy.get('.modal-body').contains('Nama Pengguna atau Kata Sandi Anda tidak cocok')
        cy.get('button').contains('OK', {force:true}).click();
    }),

    it('TC-03 login dengan data Password Salah', function () {
        cy.mainURL();
        cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value', 'e@dojobox.id');
        cy.get('#input-password').type('admin123',{force:true}).should('have.value', 'admin123');
        cy.contains('Login').click({force:true});
        cy.get('#exampleModalLabel').should('have.text', 'Error !');
        cy.get('.modal-body').contains('Nama Pengguna atau Kata Sandi Anda tidak cocok')
        cy.get('button').contains('OK', {force:true}).click();
    }),

    it('TC-04 login dengan data semua null', function () {
        cy.mainURL();
        cy.get('#input-email').click();
        cy.get('#input-password').click();
        cy.contains('Login').click({force:true});
        cy.get('#exampleModalLabel', {force:true}).should('have.text', 'Error !');
        cy.get('button').contains('OK', {force:true}).click();
    }),

    it('TC-05 login dengan data email null', function () {
        cy.mainURL();
        cy.get('#input-password').type('admin',{force:true}).should('have.value', 'admin');
        cy.contains('Login').click({force:true});
        cy.get('#exampleModalLabel').should('have.text', 'Error !');
        cy.get('.modal-body > :nth-child(1)').should('have.text', 'Email tidak boleh kosong');
        cy.get('button').contains('OK', {force:true}).click();
    }),

    it('TC-06 login dengan data password null', function () {
        cy.mainURL();
        cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value', 'e@dojobox.id');
        cy.contains('Login').click({force:true});
        cy.get('#exampleModalLabel').should('have.text', 'Error !');
        cy.get('.modal-body > :nth-child(1)').should('have.text', 'Password tidak boleh kosong');
        cy.get('button').contains('OK', {force:true}).click();
    })
})