const crypto = require("crypto");
const { test1, test2, test3 } = require("./testFactory");


//can be  moved to some  global config files
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = this.createHash(data);
    }
  }

  return this.processCandidateKey(candidate);
};

exports.createHash = (toUpdate) => {
  return crypto.createHash("sha3-512").update(toUpdate).digest("hex");
};
exports.processCandidateKey = (candidate) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = this.createHash(candidate);
  }
  return candidate;
};
