const CreerPlateau = require("../src/jeuDesAllumettes");

describe("test", () => {
  test("CreerPlateau", () => {
    const plateau = CreerPlateau();
    expect(plateau.length).toEqual(50);
  });
});
