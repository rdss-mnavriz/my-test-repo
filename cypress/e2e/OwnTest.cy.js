describe('template spec', () => {
  
  before(() => {

    cy.visit('https://www.zooroyal.de/')
    if(cy.get('[data-testid="uc-accept-all-button"]').should('be.visible')){
        cy.click();
    }
   
  

    // cy.wait(20000);
    //  cy.on('window:confirm', confitmTxt => {
    //  expect(confitmTxt).to.eql('Erlauben')
    //  })
    //  cy.contains(confitmTxt).click();

    // cy.contains('Erlauben', { timeout: 20000 }).click({force:true})
    // Cypress.on("window:before:load", () => {
    //     cy.state("jQuery", Cypress.$);
    // });
    })

  it('select product', () => {
     console.log(cy.getAllCookies());
  });


  
});
