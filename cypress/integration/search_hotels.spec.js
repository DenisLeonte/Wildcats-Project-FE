describe('Flight Search Feature', () => {
    it('Log In + Search for a hotel', () => {
        cy.visit('http://localhost:8000/login');
        cy.wait(5000);
        cy.get('input[id="id_username"]').type('root');
        cy.get('input[id="id_password"]').type('123');
        cy.get('.login-button').click();
        cy.wait(2000);

        cy.get('.map_bg').scrollIntoView()
        cy.wait(2000);

        cy.get('#map-container').click(600, 200)
        cy.wait(2000);

        cy.get('.box').should('be.visible');
        cy.wait(2000);

        cy.get('.button4.cbButton').scrollIntoView().click({ force: true }).debug();

        cy.get('input[placeholder="Start date"]').type('2024-05-25', { force: true });
        cy.get('input[placeholder="End date"]').type('2024-05-30', { force: true });
        cy.get('input[placeholder="Select City"]').type('Lyon', { force: true });
        cy.wait(2000);
        cy.get('.hotelSearchBut ').should("be.visible").click({ force: true });
        cy.wait(5000);

        cy.get('.HotelBox').should('be.visible');
    });

    it('Log In + Search for a hotel -> find no results because bad date', () => {
        cy.visit('http://localhost:8000/login');
        cy.wait(5000);
        cy.get('input[id="id_username"]').type('root');
        cy.get('input[id="id_password"]').type('123');
        cy.get('.login-button').click();
        cy.wait(2000);

        cy.get('.map_bg').scrollIntoView()
        cy.wait(2000);

        cy.get('#map-container').click(600, 200)
        cy.wait(2000);

        cy.get('.box').should('be.visible');
        cy.wait(2000);

        cy.get('.button4.cbButton').scrollIntoView().click({ force: true }).debug();

        cy.get('input[placeholder="Start date"]').type('2022-05-25', { force: true });
        cy.get('input[placeholder="End date"]').type('2022-05-30', { force: true });
        cy.get('input[placeholder="Select City"]').type('Lyon', { force: true });
        cy.wait(2000);
        cy.get('.hotelSearchBut ').should("be.visible").click({ force: true });
        cy.wait(5000);

        cy.get('.HotelBox').should('not.exist');
    });

    it('Log In + Search for a hotel with incomplete data', () => {
        cy.visit('http://localhost:8000/login');
        cy.wait(5000);
        cy.get('input[id="id_username"]').type('root');
        cy.get('input[id="id_password"]').type('123');
        cy.get('.login-button').click();
        cy.wait(2000);

        cy.get('.map_bg').scrollIntoView()
        cy.wait(2000);

        cy.get('#map-container').click(600, 200)
        cy.wait(2000);

        cy.get('.box').should('be.visible');
        cy.wait(2000);

        cy.get('.button4.cbButton').scrollIntoView().click({ force: true }).debug();

        cy.get('input[placeholder="Start date"]').type('2024-05-25', { force: true });
        cy.get('input[placeholder="Select City"]').type('Lyon', { force: true });
        cy.wait(2000);
        cy.get('.hotelSearchBut ').should("be.visible").click({ force: true });
        cy.wait(5000);
        cy.get('.HotelBox').should('not.exist');
    });

});
