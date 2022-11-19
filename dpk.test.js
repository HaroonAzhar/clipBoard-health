let library = require("./dpk");
const {
  eventWithNumericalPartitionKey,
  eventWithPartitionKeyExceedingMaxLength,
  eventWittFalsyPartitionKey,
  expectedEventType,
} = require("./testFactory");
describe("deterministicPartitionKey behavior when no event is passed as a parameter", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = library.deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey behavior when an event with expected partitionKey is passed ", () => {
  it("Return value of 'partitionKey' when event object with 'partitionKey' passed", () => {
    const trivialKey = library.deterministicPartitionKey(
      expectedEventType.event
    );
    expect(trivialKey).toBe("Key4Purpose0fTesting");
  });
});

describe("deterministicPartitionKey behavior when an event with numerical partitionKey is passed ", () => {
  it("Returns value of 'partitionKey' stringified when event object number 'partitionKey' passed", () => {
    const trivialKey = library.deterministicPartitionKey(
      eventWithNumericalPartitionKey.event
    );
    expect(trivialKey).toBe("3");
  });
});

describe("deterministicPartitionKey behavior when an event with falsy partitionKey is passed ", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(() => {
    jest.spyOn(library, "createHash");
    library.createHash = jest.fn().mockImplementation(() => {
      return "9603ab3de34eb8675f94384b3d7d73";
    });
  });

  it("Returns new hash when a falsy value for 'partitionKey'  is  passed", () => {
    const trivialKey = library.deterministicPartitionKey(
      eventWittFalsyPartitionKey.event
    );
    expect(trivialKey).toEqual("9603ab3de34eb8675f94384b3d7d73");
  });

  it("Returns new hash when a falsy value for 'partitionKey' is passed", () => {
    const trivialKey = library.deterministicPartitionKey(
      eventWittFalsyPartitionKey.event
    );
    expect(library.createHash).toHaveBeenCalledTimes(1);
  });
});

describe("deterministicPartitionKey behavior when an event with partitionKey longer then max partitionKey length is passed ", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  beforeEach(() => {
    jest.spyOn(library, "createHash");
  });
  it("Returns new hash when a 'partitionKey'  is  longer than max, passed", () => {
    const trivialKey = library.deterministicPartitionKey(
      eventWittFalsyPartitionKey.event
    );
    expect(library.createHash).toHaveBeenCalledTimes(1);
  });
});
