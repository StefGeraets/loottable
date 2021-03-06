export const hoard = {
  type: [
    {
      name: "Aberration",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: 50,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: 1,
        worth: "50GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: {
        base: null,
        worth: "25GP",
        apl: false,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
        extra: null,
        other: null
      },
      magicItem: {
        base: null,
        members: true,
        multiplier: 1,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Beast",
      gold: {
        base: 5,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: null,
        multiplier: 0.5,
        worth: "10GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: 1,
        members: false,
        multiplier: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Celestial",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: 10,
        apl: true,
      },
      gems: null,
      art: {
        base: 1,
        worth: "750GP",
        apl: false,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        other: null
      },
      magicItem: {
        base: null,
        members: false,
        multiplier: null,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
      }
    },
    {
      name: "Construct",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: 1,
        multiplier: null,
        worth: "50GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: 1,
        members: false,
        multiplier: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Dragon",
      gold: {
        base: null,
        diceToRoll: "4d6",
        diceAmount: 4,
        diceType: 6,
        multiplier: 100,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: null,
        worth: "100GP",
        type: "<br/>Dragons Color",
        diceToRoll: "2d10",
        diceAmount: 2,
        diceType: 10,
      },
      art: {
        base: null,
        worth: "250GP",
        apl: false,
        diceToRoll: "2d6",
        diceAmount: 2,
        diceType: 6,
        other: null
      },
      magicItem: {
        base: null,
        members: true,
        multiplier: 2,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Elemental",
      gold: {
        base: 5,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: null,
        multiplier: 0.5,
        worth: "10GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: 1,
        members: false,
        multiplier: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Fey",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: 100,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: 0.5,
        worth: "50GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: {
        base: null,
        worth: "100GP",
        apl: true,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        other: null
      },
      magicItem: {
        base: null,
        members: false,
        multiplier: null,
        diceToRoll: "1d8",
        diceAmount: 1,
        diceType: 8,
      }
    },
    {
      name: "Fiend",
      gold: {
        base: null,
        diceToRoll: "2d6",
        diceAmount: 2,
        diceType: 6,
        multiplier: 100,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: 1,
        worth: "100GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: {
        base: 1,
        worth: "2500GP",
        apl: false,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        other: null
      },
      magicItem: {
        base: null,
        members: true,
        multiplier: 1,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Giant",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: 10,
        apl: true,
      },
      gems: null,
      art: {
        base: 1,
        worth: null,
        apl: false,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        extra: null,
        other: "Roll on random items <br /> in a giants bag from SKT"
      },
      magicItem: {
        base: null,
        members: false,
        multiplier: null,
        diceToRoll: "1d8",
        diceAmount: 1,
        diceType: 8,
      }
    },
    {
      name: "Humanoid",
      gold: {
        base: null,
        diceToRoll: "1d6",
        diceAmount: 1,
        diceType: 6,
        multiplier: 100,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: null,
        worth: "500GP",
        type: null,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
      },
      art: {
        base: 1,
        worth: null,
        apl: false,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        other: "1 Art Object from each table <br/>excluding 7500GP Art Object"
      },
      magicItem: {
        base: null,
        members: false,
        multiplier: null,
        diceToRoll: "1d8",
        diceAmount: 1,
        diceType: 8,
      }
    },
    {
      name: "Monstrosity",
      gold: {
        base: 5,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: null,
        multiplier: 0.5,
        worth: "10GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: 1,
        members: false,
        multiplier: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Ooze",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: 1,
        multiplier: null,
        worth: "50GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: 1,
        members: false,
        multiplier: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
    {
      name: "Plant",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: null,
        apl: false,
      },
      gems: {
        amount: 1,
        multiplier: null,
        worth: "50GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: null,
      magicItem: {
        base: null,
        members: false,
        multiplier: null,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
      }
    },
    {
      name: "Undead",
      gold: {
        base: null,
        diceToRoll: "2d4",
        diceAmount: 2,
        diceType: 4,
        multiplier: 50,
        apl: true,
      },
      gems: {
        amount: null,
        multiplier: 0.5,
        worth: "750GP",
        type: null,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      },
      art: {
        base: null,
        worth: "25GP",
        apl: false,
        diceToRoll: "1d4",
        diceAmount: 1,
        diceType: 4,
        other: null
      },
      magicItem: {
        base: null,
        members: true,
        multiplier: 1,
        diceToRoll: null,
        diceAmount: null,
        diceType: null,
      }
    },
  ]
}
