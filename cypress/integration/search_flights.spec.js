describe('Flight Search Feature', () => {
    it('navigates to the flight search page through the map', () => {
      cy.visit('http://localhost:8000'); 
      cy.wait(5000);
      cy.get('.map_bg').scrollIntoView()
      cy.wait(2000);
  
      cy.get('#map-container').click(1000, 500)
      cy.wait(2000);
  
      cy.get('.box').should('be.visible');
      cy.wait(2000);
  
      cy.get('.button2.cbButton').scrollIntoView().click({force: true});

  
      cy.get('.dest').should('be.visible');
      cy.get('.origin').should('be.visible');
      cy.get('.searchBox').should('be.visible');
      cy.get('input[placeholder="Origin"]').type('Madrid');
      cy.get('input[placeholder="Destination"]').type('Rome');
      cy.get('input[placeholder="Start date"]').type('2024-05-25', {force: true});
      cy.get('input[placeholder="End date"]').type('2024-05-30', {force: true});
      cy.get('.searchButton.disable_animation').should("be.visible").click({force: true});
      cy.wait(2000);
      cy.get('.searchButton ').should("be.visible").click({force: true});
      cy.wait(5000);
      cy.get('.resultList').should('be.visible');
      cy.get('.result').should('be.visible');
    });

    it('navigates to the flight search page through the map but we dont find any results', () => {
      cy.visit('http://localhost:8000'); 
      cy.get('.map_bg').scrollIntoView()
      cy.wait(2000);
  
      cy.get('#map-container').click(800, 300)
      cy.wait(2000);
  
      cy.get('.box').should('be.visible');
      cy.wait(2000);
  
      cy.get('.button2.cbButton').scrollIntoView().click({force: true});

  
      cy.get('.dest').should('be.visible');
      cy.get('.origin').should('be.visible');
      cy.get('.searchBox').should('be.visible');
      cy.get('input[placeholder="Origin"]').type('Madrid');
      cy.get('input[placeholder="Destination"]').type('Berne');
      cy.get('input[placeholder="Start date"]').type('2023-05-25', {force: true});
      cy.get('input[placeholder="End date"]').type('2023-05-30', {force: true});
      cy.get('.searchButton.disable_animation').should("be.visible").click({force: true});
      cy.wait(2000);
      cy.get('.searchButton ').should("be.visible").click({force: true});
      cy.wait(5000);
      // check if result list is visible and you should not find any div named result
      cy.get('.result').should('not.exist');
    });

    it('Incomplete data', () => {
      cy.visit('http://localhost:8000'); 
      cy.get('.map_bg').scrollIntoView()
      cy.wait(2000);
  +
      cy.get('#map-container').click(800, 300)
      cy.wait(2000);
  
      cy.get('.box').should('be.visible');
      cy.wait(2000);
  
      cy.get('.button2.cbButton').scrollIntoView().click({force: true});

  
      cy.get('.dest').should('be.visible');
      cy.get('.origin').should('be.visible');
      cy.get('.searchBox').should('be.visible');
      cy.get('input[placeholder="Origin"]').should('be.visible');
      cy.get('input[placeholder="Destination"]').type('Berne');
      cy.get('input[placeholder="Start date"]').type('2023-05-25', {force: true});
      cy.get('input[placeholder="End date"]').type('2023-05-30', {force: true});
      cy.get('.searchButton.disable_animation').should("be.visible").click({force: true});
      cy.wait(2000);
      cy.get('.searchButton ').should("be.visible").click({force: true});
      cy.wait(5000);
      // check if result list is visible and you should not find any div named result
      cy.get('.result').should('not.exist');
    });
  });
  