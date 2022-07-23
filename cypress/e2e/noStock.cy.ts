// https://docs.cypress.io/api/introduction/api.html

describe("No Stock Buy Test", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:3000/");
  });
  it("try add to basket no stock item", () => {
    cy.get(".deviceCards[data-stock=0]")
      .find("#plusAmount")
      .click({ multiple: true });

    cy.get(".deviceCards[data-stock=0]")
      .find("input[type=number]")
      .should("have.value", "0");

    cy.get(".deviceCards[data-stock=0]")
      .find("button:contains(Add)")
      .click({ multiple: true });
  });
  it("check basket is it in basket ", () => {
    cy.get("#basketIcon").click();
    cy.get("#totalPrice")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq("0 TL");
        cy.get("#closePopup").click({ force: true });
      });
  });
});
