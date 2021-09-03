var customizeUser = generateRandomUser();
function generateRandomUser(){
    const time = new Date().getTime();
    return "jenar"+time;
}


describe('Admin PKH menambahkan data facilitator', function () {
    it('TC-01 Add Facilitator dengan Email yang sudah terdaftar', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.contains('Tambah Facilitator').click();
        cy.get('.mb-4.text-gray-800').should('have.text', '   Tambah Data Fasilitator');
        cy.get('#drop-zone').attachFile('bahantest.jpg');
        cy.get('input[type="file"]').attachFile('bahantest.jpg');
        cy.get('#user_fullname').type('Jenar Satu').should('have.value', 'Jenar Satu');
        cy.get('#user_email').type('jenarsatu@email.com').should('have.value', 'jenarsatu@email.com');
        cy.get('#user_password').type('12345678').should('have.value', '12345678');
        cy.get('#user_province_id').select('DI YOGYAKARTA');
        cy.get('#user_city_id').select('KAB. SLEMAN');
        cy.get('#user_subdistrict_id').select('Ngaglik');
        cy.get('#user_address').type('Jalan Kaliurang Km 9');
        cy.get('#user_area_province_id').select('JAWA TENGAH');
        cy.get('#user_area_city_id').select('KOTA SEMARANG');
        cy.get('#user_area_subdistrict_id').select('Tembalang');
        cy.get('#add').click();
        cy.get('#modal-title').should('have.text', 'Error !');
        cy.get('button').contains('OK', {force:true}).click();
    }),
    
    it('TC-02 Add Facilitator dengan Email Baru dan alamat penugasan berbeda', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.contains('Tambah Facilitator').click();
        cy.get('.mb-4.text-gray-800').should('have.text', '   Tambah Data Fasilitator');
        cy.get('#drop-zone').attachFile('bahantest.jpg');
        cy.get('input[type="file"]').attachFile('bahantest.jpg');
        cy.get('#user_fullname').type(customizeUser).should('have.value', customizeUser);
        cy.get('#user_email').type(customizeUser+'@email.com').should('have.value', customizeUser+'@email.com');
        cy.get('#user_password').type('12345678').should('have.value', '12345678');
        cy.get('#user_province_id').select('DI YOGYAKARTA');
        cy.get('#user_city_id').select('KAB. SLEMAN');
        cy.get('#user_subdistrict_id').select('Ngaglik');
        cy.get('#user_address').type('Jalan Kaliurang Km 9');
        cy.get('#user_area_province_id').select('JAWA TENGAH');
        cy.get('#user_area_city_id').select('KOTA SEMARANG');
        cy.get('#user_area_subdistrict_id').select('Tembalang');
        cy.get('#add').click();
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('button').contains('OK', {force:true}).click();
    }) 

    it('TC-03 Add Facilitator dengan Email Baru dan alamat penugasan sama', function () {
        cy.mainURL();
        cy.adminLogin();
        cy.contains('Login').click({force:true});
        cy.get('.mr-2 > b').should('have.text', 'Super Admin');
        cy.contains('Tambah Facilitator').click();
        cy.get('.mb-4.text-gray-800').should('have.text', '   Tambah Data Fasilitator');
        cy.get('#drop-zone').attachFile('bahantest.jpg');
        cy.get('input[type="file"]').attachFile('bahantest.jpg');
        cy.get('#user_fullname').type(customizeUser+'A').should('have.value', customizeUser+'A');
        cy.get('#user_email').type(customizeUser+'A'+'@email.com').should('have.value', customizeUser+'A'+'@email.com');
        cy.get('#user_password').type('12345678').should('have.value', '12345678');
        cy.get('#user_province_id').select('DI YOGYAKARTA');
        cy.get('#user_city_id').select('KAB. SLEMAN');
        cy.get('#user_subdistrict_id').select('Ngaglik');
        cy.get('#user_address').type('Jalan Kaliurang Km 9');
        cy.get('.py-2',{force:true}).click();
        cy.get('#add').click();
        cy.get('#modal-title').should('have.text', 'Success');
        cy.get('button').contains('OK', {force:true}).click();
    })
})