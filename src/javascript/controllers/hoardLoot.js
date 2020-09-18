import { hoard } from '../../data/hoard'
import * as error from '../helpers/errorHandler'

const findChar = (charName) => {
  let result = hoard.type.find(char => char.name === charName)
  return result
}

const rollDice = (amount) => {
  return Math.floor(Math.random() * amount) + 1
}

const baseGold = (goldInput) => {
  let total
  let diceResults = []
  if (goldInput.base) {
    total = goldInput.base
  } else {
    let totalRoll = 0;
    for (let i = 0; i < goldInput.diceAmount; i++) {
      let diceRoll = rollDice(goldInput.diceType);
      diceResults.push(diceRoll)
      totalRoll += diceRoll
    }
    total = totalRoll
  }

  return {
    total: total,
    diceRolls: diceResults
  }
}

const addGoldMultiplier = (check, total) => {
  if (check) {
    return total *= check
  } else {
    return total
  }
}

const addAPLMultiplier = (check, apl, total) => {
  if (check) {
    if (apl) {
      return total *= apl
    } else {
      error.formError(hoardPartyLevel, "Average Player Level is required to calculate loot")
      return total
    }
  } else {
    return total
  }
}

const calculateGold = (charData, lootData) => {
  // roll gold die
  let rolledGold = baseGold(charData.gold)

  // add gold multipliers
  rolledGold.total = addGoldMultiplier(charData.gold.multiplier, rolledGold.total)

  // add APL
  rolledGold.total = addAPLMultiplier(charData.gold.apl, lootData.hoardLevel, rolledGold.total)

  return rolledGold
}

const calculateGems = (charData, lootData) => {
  let gemAmount = 0
  let diceRolls = []
  let worth, type

  if(charData.gems) {
    // base amount
    if (charData.gems.amount) {
      gemAmount = charData.gems.amount
    }
    // apl amount
    if (charData.gems.multiplier) {
      gemAmount = Math.floor(lootData.hoardLevel * charData.gems.multiplier)
    }
    // dice amount
    if (charData.gems.diceToRoll) {
      let totalRoll = 0;
      for (let i = 0; i < charData.gems.diceAmount; i++) {
        let diceRoll = rollDice(charData.gems.diceType);
        diceRolls.push(diceRoll)
        totalRoll += diceRoll
      }
      gemAmount = totalRoll
    }
    // set worth and type
    worth = charData.gems.worth
    type = charData.gems.type
  }

  return {
    total: gemAmount,
    worth: worth,
    type: type,
    diceRolls: diceRolls,
  }
}

const calculateArt = (charData, lootData) => {
  let artAmount = 0
  let diceRolls = []
  let worth, extra, other

  if (charData.art) {
    // base amount
    if (charData.art.base) {
      artAmount = charData.art.base
    }
    // Player Level
    if (charData.art.apl) {
      if (lootData.hoardLevel) {
        artAmount = parseInt(lootData.hoardLevel)
      } else {
        error.formError(hoardPartyLevel, "Average Player Level is required to calculate loot")
      }
    }
    // Roll Dice
    if (charData.art.diceToRoll) {
      let totalRoll = 0;
      for (let i = 0; i < charData.art.diceAmount; i++) {
        let diceRoll = rollDice(charData.art.diceType);
        diceRolls.push(diceRoll)
        totalRoll += diceRoll
      }
      artAmount = totalRoll
    }

    // worth, info
    if (charData.art.worth) {
      worth = charData.art.worth
    }
    if (charData.art.extra) {
      extra = charData.art.extra
    }
    if (charData.art.other) {
      other = charData.art.other
    }
  }

  return {
    total: artAmount,
    diceRolls: diceRolls,
    worth: worth,
    extra: extra,
    other: other
  }
}

const calculateMagicItems = (charData, lootData) => {
  let itemsTotal = 0
  let diceRolls = []

  if (charData.magicItem.base) {
    itemsTotal += charData.magicItem.base
  }

  if (charData.magicItem.members) {
    if (lootData.partyMembers) {
      itemsTotal = parseInt(lootData.partyMembers) * charData.magicItem.multiplier
    } else {
      error.formError(partyMember, "Party Members is required to calculate loot")
    }
  }

  if (charData.magicItem.diceToRoll) {
    let totalRoll = 0;
    for (let i = 0; i < charData.magicItem.diceAmount; i++) {
      let diceRoll = rollDice(charData.magicItem.diceType);
      diceRolls.push(diceRoll)
      totalRoll += diceRoll
    }
    itemsTotal = totalRoll
  }

  return {
    total: itemsTotal,
    diceRolls: diceRolls
  }
}

export const init = (lootData) => {
  const charData = findChar(lootData.charType)
  
  // Gold Loot
  let gold = calculateGold(charData, lootData)
  
  // Gems Loot
  let gems = calculateGems(charData, lootData)

  // Art Loot
  let art = calculateArt(charData, lootData)

  // Magic Items
  let magicItems = calculateMagicItems(charData, lootData)

  return {
    charData: charData,
    gold: gold,
    gems: gems,
    art: art,
    magicItems: magicItems
  }
}
