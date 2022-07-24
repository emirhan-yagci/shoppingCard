// https://docs.cypress.io/api/introduction/api.html
let firstStock = 0;

describe("Buy an device", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:3000/");
  });

  it("add to basket", () => {
    cy.get(".deviceCards")
      .eq(0)
      .find("#deviceStock")
      .invoke("text")
      .then((stock) => {
        firstStock = Number(stock);
      });

    cy.get(".plusAmount").eq(0).click({ multiple: true });

    cy.get(".deviceCards")
      .find("button:contains(Add)")
      .eq(0)
      .click({ multiple: true });
  });

  it("buy inside of basket device", () => {
    cy.get("#basketIcon").click();

    cy.get("#basketItemContainer").children().should("have.length", 1);
    cy.get("#buyBasketBtn").click();
  });
  it("stock control", () => {
    cy.get(".deviceCards")
      .eq(0)
      .find("#deviceStock")
      .invoke("text")
      .then((stock) => {
        expect(stock).to.not.equal(firstStock - 1);
      });
  });
});
