# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

## Explanation:

Note: falsy value for `partitionKey` property of event means not being set .

The DPK(DeterministicPartitionKey) function had 2 primary if blocks with some nested if-else blocks.
The first `if` block avoids creating a candidate key or setting it, by checking that `event` parameter was not passed to the the DPK function.
The second `if` block needs to return `TRIVIAL_PARTITION_KEY` value if candidate was not set.
By checking if `event` parameter is not passed and returning `TRIVIAL_PARTITION_KEY` value, we remove those checks from both the `if` blocks and clear the un-neccessary nesting.

The result of the remedy above causes first if block to become just one `if-else` condition/statement where candidate key is set to the passed `partitionKey` property of `event` parameter or a new hash key if `partitionKey` property of `event` is not present.

The second effect of the remedy above is that the second `if` block becomes 2 seperate `if` statements where each checks, whether the candidate key is of type string and is less then `MAX_PARTITION_KEY_LENGTH`. It then peforms the operation required to fix the candidate key. I encapsulated this logic within a seperate function called `stringifiedReducedCandidateKey` because this was a seperate logic/responsibility than retrieving `PartitionKey` for an `event` parameter.

Note- I have not written test for `stringifiedReducedCandidateKey` because they are tested in the behavior of the DPK function and with shortage of time I had to leave them as.

I also moved the code for creating a hash key to a seperate function called `createHash` because it made the DPK function more testable by mocking the behavior of creating new hashes. It also allowed to implement fucntionality of optionally using `update` chain function by passing a parameter.

The `update` call on `data` inside the first `if` block produced no side-effect, so I removed it.
