export const individual = {
  type: [
    {
      name: "Aberration",
      treasureChance: {
        default: 1,
        range: {
          from: 9,
          percentage: 40,
        },
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d12",
        diceAmount: 2,
        diceType: 12,
      },
      modifier: 1,
      settings: {
        low: 1,
        mid: 2,
        high: 3
      },
    },
    {
      name: "Beast",
      treasureChance: {
        default: 1,
        range: null,
      },
      baseGp: {
        baseGold: 1,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      modifier: 1,
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Celestial",
      treasureChance: {
        default: 0,
        range: {
          from: 10,
          percentage: 60,
        },
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d10",
        diceAmount: 2,
        diceType: 10,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Construct",
      treasureChance: {
        default: 1,
        range: null,
      },
      baseGp: {
        baseGold: 1,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      modifier: 1,
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Dragon",
      treasureChance: {
        default: 0,
        range: null,
      },
      baseGp: {
        baseGold: 0,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      modifier: 1,
      settings: {
        low: 0,
        mid: 0,
        high: 0
      },
    },
    {
      name: "Elemental",
      treasureChance: {
        default: 0,
        range: null,
      },
      baseGp: {
        baseGold: 0,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      modifier: 1,
      settings: {
        low: 0,
        mid: 0,
        high: 0
      },
    },
    {
      name: "Fey",
      treasureChance: {
        default: 80,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 2,
        high: 3
      },
    },
    {
      name: "Fiend",
      treasureChance: {
        default: 90,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d8",
        diceAmount: 2,
        diceType: 8,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 2,
        high: 3
      },
    },
    {
      name: "Giant",
      treasureChance: {
        default: 95,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 2,
        high: 3
      },
    },
    {
      name: "Humanoid",
      treasureChance: {
        default: 95,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d6",
        diceAmount: 2,
        diceType: 6,
      },
      modifier: "",
      settings: {
        low: 5,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Monstrosity",
      treasureChance: {
        default: 10,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
      },
      modifier: 1,
      settings: {
        low: 0,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Ooze",
      treasureChance: {
        default: 80,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d12",
        diceAmount: 2,
        diceType: 12,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Plant",
      treasureChance: {
        default: 40,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d10",
        diceAmount: 2,
        diceType: 10,
      },
      modifier: 1,
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
    {
      name: "Undead",
      treasureChance: {
        default: 20,
        range: null,
      },
      baseGp: {
        baseGold: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
      },
      modifier: "",
      settings: {
        low: 1,
        mid: 1,
        high: 2
      },
    },
  ]
}