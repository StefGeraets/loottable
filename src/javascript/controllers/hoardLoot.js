import * as find from './findController'
import * as error from '../helpers/errorHandler'
import * as dice from './rollController'

const baseGold = (goldInput) => {
  let goldTotal
  let diceResults = []

  if (goldInput.base) {
    goldTotal = goldInput.base;
  } else {
    let { total, rolls } = dice.rollMultiple(goldInput.diceAmount, goldInput.diceType)
    goldTotal = total
    diceResults = rolls
  }

  return {
    total: goldTotal,
    diceRolls: diceResults,
  };
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
      let { total, rolls } = dice.rollMultiple(charData.gems.diceAmount, charData.gems.diceType)
      gemAmount = total
      diceRolls = rolls
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
  let worth, other

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
      let { total, rolls } = dice.rollMultiple(charData.art.diceAmount, charData.art.diceType)
      artAmount = total
      diceRolls = rolls
    }

    // worth, info
    worth = charData.art.worth
    other = charData.art.other
  }

  return {
    total: artAmount,
    diceRolls: diceRolls,
    worth: worth,
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
    let { total, rolls } = dice.rollMultiple(charData.magicItem.diceAmount, charData.magicItem.diceType)
    itemsTotal = total
    diceRolls = rolls
  }

  return {
    total: itemsTotal,
    diceRolls: diceRolls
  }
}

export const init = (lootData) => {
  const charData = find.findHoard(lootData.charType)
  
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
