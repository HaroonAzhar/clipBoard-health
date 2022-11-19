const { deterministicPartitionKey } = require("./dpk");
const { test1, test2, test3 } = require("./testFactory");
const crypto = require("crypto");
const jest = require("jest");

describe("deterministicPartitionKey", () => {
  jest.fn("Ha$h2!");
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Return value of 'partitionKey' when event object with 'partitionKey' passed", () => {
    const trivialKey = deterministicPartitionKey(test1.data);
    expect(trivialKey).toBe("string ok values");
  });
  it("Returns value of 'partitionKey' stringified when event object number 'partitionKey' passed", () => {
    const trivialKey = deterministicPartitionKey(test3.data);
    expect(trivialKey).toBe("3");
  });

  it("Returns hash when a falsy value for 'partitionKey'  is  passed", () => {
    const trivialKey = deterministicPartitionKey(test4.data);

    expect(trivialKey).toBe("3");
  });
});
