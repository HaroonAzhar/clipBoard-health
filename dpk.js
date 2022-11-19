const crypto = require("crypto");
const { test1, test2, test3 } = require("./testFactory");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//       console.log("----hash candidate------", candidate);
//       console.log("-----hash data----", data);
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   console.log("---candidate------", candidate);
//   return candidate;
// };
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = createHash(data);
      // console.log("----hash candidate------", candidate);
      // console.log("-----hash data----", data);
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }
  // console.log("---candidate------", candidate);
  return candidate;
};

const createHash = (toUpdate) => {
  return crypto.createHash("sha3-512").update(toUpdate).digest("hex");
};

// this.deterministicPartitionKey(test1.data);
// console.log(
//   "---------------------- test1-------------------------------------"
// );
// this.deterministicPartitionKey(test2.data);
// console.log(
//   "---------------------- test2-------------------------------------"
// );
// this.deterministicPartitionKey(test3.data);
// console.log(
//   "---------------------- test3-------------------------------------"
// );
// this.deterministicPartitionKey(test4.data);
// console.log(
//   "---------------------- test4-------------------------------------"
// );
// this.deterministicPartitionKey(test5.data);
