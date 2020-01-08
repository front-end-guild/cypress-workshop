context('Hooks', function () {
  before(function () {
    // runs once before all tests in the block
  });

  after(function () {
    // runs once after all tests in the block
  });

  beforeEach(function () {
    // runs before each test in the block
  });

  afterEach(function () {
    // runs after each test in the block
  });

  it.only('', () => {
    // runs only this test
  });

  it.skip('', () => {
    // runs only this test
  });

  describe('if your app uses jQuery', function () {
    ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
      it('triggers event: ' + event, function () {
        cy.get('#elementId').invoke('trigger', event);
      })
    })
  });

  describe('Interacting with elements', function () {
    it('DOM Events', function () {
      cy.contains('Element contained text');

      //Interacting with elements list.
      cy.get('nav a').first();
      cy.get('nav a').last();
      cy.get('nav a').eq(1);

      //Trigger events on elements.
      cy.get('.menu-item').trigger('mouseover');
      cy.get('.menu-item').trigger('blur');
      cy.get('.menu-item').trigger('mouseleave');

      //Trigger actions on elements.
      cy.get('#elementId').click();
      cy.get('#elementId').dblclick();
      cy.get('#elementId').rightclick();
      cy.get('#elementId').type();
      cy.get('#elementId').clear();
      cy.get('#elementId').check();
      cy.get('#elementId').uncheck();
      cy.get('#elementId').select();

      //Dealing with inner objects
      cy.get('#parentElementId').find('.childElementClass').type('text');
      cy.get('button').each($button => {
        console.log($button)
      });
    })
  });

  describe('Interacting with site location', function () {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('https://example.cypress.io/commands/location');
      expect(location.host).to.eq('example.cypress.io');
      expect(location.hostname).to.eq('example.cypress.io');
      expect(location.origin).to.eq('https://example.cypress.io');
      expect(location.pathname).to.eq('/commands/location');
      expect(location.port).to.eq('');
      expect(location.protocol).to.eq('https:');
      expect(location.search).to.be.empty;
    });
    cy.location('hostname').to.eq('bla');
    cy.location('pathname').should('include', 'navigation');
    cy.go('back');
    cy.go('forward');
    cy.viewport(320, 480);
  });


  describe('Debugging', function () {
    it('Debugging tests!', function () {
      cy.get('#elementId').click();
      cy.get('#elementId').pause().dblclick();
      cy.get('#elementId').debug().rightclick();
      cy.get('.post').screenshot();
      //Lets see timetravel.
    })
  });
});
