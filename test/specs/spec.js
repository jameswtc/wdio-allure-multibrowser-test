const expect = require('chai').expect;

browser.url('/');

describe("heading", () => {
  it("should exist", () => {
    expect($('h1.heading').isExisting()).to.be.true;
  })
})

describe("first link", () => {
  it("should exist", () => {
    expect($('a:nth-of-type(1)').isExisting()).to.be.true;
  })

  it("should fail only on chrome", () => {
    if (browser.desiredCapabilities.browserName === "chrome")
      expect($('ul a:nth-of-type(1)').getText()).to.equal("foo");
    else
      expect($('ul a:nth-of-type(1)').getText()).to.equal("A/B Testing");
  })
})