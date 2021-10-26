// import cypress from "cypress";

describe("Suite de testes: Testaras funcionalidades do site globalsqa", () => {
  it.skip("Cenario de testes: Registrar um usuario com secesso", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Bruno");
    cy.get("#Text1").type("Almeida");
    cy.get("#username").type("Vollin");
    cy.get("#password").type("sbjkcasBHNDKCIL");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
  });

  it.skip("Cenario de testes: Registrar usuario com dados invalidos", () => {
    cy.visit(
      "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Bruno");
    cy.get("#Text1").type("Almeida");
    cy.get("#username").type("Vollin");
    // cy.get("#password").type("sbjkcasBHNDKCIL");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
  });

  it("Cenario de testes: Login com secesso", () => {
    const userInfo: User = createUser();
    loginUser(userInfo);
  });
});

const getId = () => {
  const date = new Date();
  const id = `${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
  return id;
};

interface User {
  id: string;
  pass: string;
}

const createUser = (): User => {
  const userId = getId() + "_userId";
  const userPass = getId() + "_userPassword";

  const user: User = {
    id: userId,
    pass: userPass,
  };

  cy.visit(
    "https://globalsqa.com/angularJs-protractor/registration-login-example/#/login"
  );
  cy.get(".btn-link").click();
  cy.get("#firstName").type(user.id);
  cy.get("#Text1").type(user.id);
  cy.get("#username").type(user.id);
  cy.get("#password").type(user.pass);
  cy.get(".btn-primary").click();
  cy.get(".ng-binding").should("contain.text", "Registration successful");

  return user;
};

const loginUser = (user: User): void => {
  cy.get("#username").type(user.id);
  cy.get("#password").type(user.pass);
  cy.get(".btn-primary").click();
  cy.get("h1.ng-binding").should("contain.text", user.id);
};
