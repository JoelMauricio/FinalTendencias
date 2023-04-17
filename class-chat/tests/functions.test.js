import { fetchMessages, sum } from "./functionsForTesting.js";

describe("sum", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
})
// describe("Old messages load", () => {
//     test("fetchMessages() should return a value", async () => {
//         expect(await fetchMessages()).not.toBe(undefined);
//     })
// })