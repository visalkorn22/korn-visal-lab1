const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");
describe("GET /", () => {
  it("should return Hello, VISAL!", async () => {
    const res = await request(app).get("/");
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, VISAL!"); // <-- updated
  });
});
