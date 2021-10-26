/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
      login(user: string, password: string): Chainable<Element>;
    }
  }
  