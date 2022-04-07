const supertest = require("supertest");
const server = require("../src/index.js");

const api = supertest(server);

// 1 - New customer was created at database:
describe("add a new customer at list as json", () => {
  test("new customer added at list", () => {
    expect(200);
    expect("/customer");
  });
});

// 2 - get a single customer with all the attributes:
describe("return a single customer as json", () => {
  test("show me a customer from the list", () => {
    expect(200);
    expect("/customer/customer.id");
  });
});

// 3 - get all customers:
describe("return all customers store as json", () => {
  test("customers list", () => {
    expect(200);
    expect("/customer");
  });
});

// 4 - update all atributes for a customer:
describe("update all atributes from a client as json", () => {
  test("updating all the information of a client in the list", () => {
    expect(200);
    expect("/customer/customer.id");
  });
});

//  5 - Check if a customer was deleted at database:
describe("check if a customar was deleted from customer list", () => {
  test("the customer was removed from the list", () => {
    expect(200);
    expect("/customer/customer.id");
  });
});
