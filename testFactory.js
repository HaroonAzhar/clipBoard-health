exports.expectedEventType = {
  event: {
    partitionKey: "Key4Purpose0fTesting",
  },
};

exports.eventWittFalsyPartitionKey = {
  event: {
    apples: "string values",
    core: "ok ok",
  },
};

exports.eventWithNumericalPartitionKey = {
  event: {
    partitionKey: 3,
  },
};
exports.eventWithPartitionKeyExceedingMaxLength = {
  event: {
    partitionKey:
      "9603ab387dad0fce77cba5a1eb2be2581a95271ee159cc1afdd1d4a92f3eefc6afdb1fcd7dd4dc285c8a0b37013c039568dee6b47de34eb8675f94384b3d7d73ggwowcav8ernnffv87s99dnvnv94nfnfieifidnvnviee9rjfnvmwooeel,sbcbvnxjswi49599ejfdjdkdsncnsnc xs9e49rjenfmnsbcmsjfneenf949jfenndnfnsnfkjsjfeidejdnjndkfei",
  },
};
