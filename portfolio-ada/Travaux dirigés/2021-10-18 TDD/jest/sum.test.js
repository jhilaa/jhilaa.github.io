const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(3);
});

// ligne de commande pour le test
// .../npm run test
