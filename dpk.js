const crypto = require("crypto");
const { test1, test2, test3 } = require("./testFactory");

//can be  moved to some  global config files
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
exports.deterministicPartitionKey = (event) => {
  let candidateKey;
  if (!event) return TRIVIAL_PARTITION_KEY;
  candidateKey = event.partitionKey ? event.partitionKey : this.createHash();

  return this.stringifiedReducedCandidateKey(candidateKey);
};

exports.createHash = (toUpdate) => {
  return toUpdate
    ? crypto.createHash("sha3-512").update(toUpdate).digest("hex")
    : crypto.createHash("sha3-512").digest("hex");
};
exports.stringifiedReducedCandidateKey = (candidate) => {
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = this.createHash(candidate);
  }
  return candidate;
};
