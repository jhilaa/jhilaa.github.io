const create_deck = require("../src/poker");
const shuffle_deck = require("../src/poker");
const trouve_double_paire = require("../src/poker");
const trouve_carre = require("../src/poker");

describe("create_deck", () => {
  test("create_deck", () => {
    const deck = create_deck();
    expect(deck.length).toEqual(52);
  });
});

describe("trouve_carre", () => {
  test("trouve_carre", () => {
    const deck = trouve_carre([
      {
        card_color: "2",
        card_color_order: "2",
        card_value: "2",
        card_value_order: "2",
      },
      {
        card_color: "2",
        card_color_order: "2",
        card_value: "2",
        card_value_order: "2",
      },
      {
        card_color: "2",
        card_color_order: "2",
        card_value: "2",
        card_value_order: "2",
      },
      {
        card_color: "2",
        card_color_order: "2",
        card_value: "2",
        card_value_order: "2",
      },
    ]);
    expect(deck.length).toEqual(52);
  });
});
