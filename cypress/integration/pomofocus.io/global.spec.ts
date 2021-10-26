/// <reference types="cypress" />

describe("Suite de testes: Testar as funcionalidades do site pomofocus.io", () => {
  it("Cenario de testes: background-color muda para a cor rgb(76, 145, 149) quando clicar em short breack ", () => {
    cy.visit("https://pomofocus.io/");
    cy.wait(2000);
    cy.get(".sc-dEoRIm").click();
    cy.wait(2000);
    cy.get(".sc-kkGfuU")
      .should("have.css", "background-color")
      .and("eq", "rgb(76, 145, 149)");
  });

  it("Cenario de testes: Quando clicar em Long breack o tempo deve ser de 15 minutos ", () => {
    cy.visit("https://pomofocus.io/");
    cy.wait(2000);
    cy.get(".sc-jtggT").click();
    cy.wait(2000);
    cy.get("#timer-string").should("contain.text", "15:00");
  });

  it("Cenario de testes: Quando clicar em start o tempo deve diminuir", () => {
    cy.visit("https://pomofocus.io/");
    cy.wait(2000);
    cy.get(".sc-LKuAh > .sc-bdVaJa").click();
    cy.wait(2000);
    cy.get("#timer-string")
      .invoke("text")
      .then(parseFloat)
      .should("be.below", 25);
  });

  it("Cenario de testes: Mudar tempo do break para 4 minutos no menu de configuração", () => {
    cy.visit("https://pomofocus.io/");
    cy.wait(2000);
    cy.get(".sc-kpOJdX > :nth-child(2)").click();
    cy.wait(2000);
    cy.get(".sc-caSCKo > :nth-child(2) > .sc-iAyFgw").clear().type("4");
    cy.get(".sc-fBuWsC > .sc-bxivhb").click();
    cy.wait(2000);
    cy.get(".sc-dEoRIm").click();
    cy.wait(2000);
    cy.get("#timer-string").should("contain.text", "4:00");
  });

  it("Cenario de testes: Adicionando Task", () => {
    var taskName = "Eae Chis, tudo bom?";
    cy.visit("https://pomofocus.io/");
    cy.get(".sc-esOvli").click();
    cy.wait(2000);
    cy.get("#input_activity_title").type(taskName);
    cy.get(".sc-kIPQKe").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .sc-CtfFt")
      .invoke("text")
      .then(parseFloat)
      .should("be.greaterThan", 0);
  });

  it("Cenario de testes: Não deve ser possivel setar pomodoros negativos", () => {
    cy.visit("https://pomofocus.io/");
    cy.wait(2000);
    cy.get(".sc-esOvli").click();
    cy.wait(2000);
    cy.get(".sc-dfVpRl > :nth-child(4)").click();
    cy.wait(2000);
    cy.get(".sc-dfVpRl > :nth-child(4)").click();
    cy.get("#input_est_pomodoro").should("contain.value", 0);
  });
});
