const chai = require("chai");
const expect = chai.expect;
const { doRequest, getHash, readFileAsync } = require("../src/02-practico"); // Import the functions you want to test

describe("Unit Tests", function () {
  it("should receive data from Google", function (done) {
    doRequest()
      .then((data) => {
        expect(data).to.not.be.null;
        expect(data).to.be.a("string");
        done();
      })
      .catch((err) => done(err));
  });

  it('should encrypt "b" and "c" differently', function (done) {
    Promise.all([getHash("b"), getHash("c")])
      .then(([hashB, hashC]) => {
        expect(hashB).to.not.equal(hashC);
        done();
      })
      .catch((err) => done(err));
  });

  it('should read "Multitask.js" and compare content with "hello"', function (done) {
    readFileAsync("Multitask.js")
      .then((content) => {
        expect(content).to.equal("hello");
        done();
      })
      .catch((err) => done(err));
  });
});
