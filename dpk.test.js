let library = require("./dpk");
const { test1, test2, test3 } = require("./testFactory");
const crypto = require("crypto");
describe("deterministicPartitionKey", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = library.deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Return value of 'partitionKey' when event object with 'partitionKey' passed", () => {
    const trivialKey = library.deterministicPartitionKey(test1.data);
    expect(trivialKey).toBe("string ok values");
  });
  it("Returns value of 'partitionKey' stringified when event object number 'partitionKey' passed", () => {
    const trivialKey = library.deterministicPartitionKey(test3.data);
    expect(trivialKey).toBe("3");
  });
  it("Returns hash when a falsy value for 'partitionKey'  is  passed", () => {
    library.createHash = jest.fn().mockImplementation(() => {
      return "9603ab3de34eb8675f94384b3d7d73";
    });
    const trivialKey = library.deterministicPartitionKey(test2.data);
    expect(trivialKey).toEqual("9603ab3de34eb8675f94384b3d7d73");
  });
});
