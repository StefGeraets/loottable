import { individual } from '../../data/individual'
import * as error from '../helpers/errorHandler'

const findChar = (charName) => {
  let result = individual.type.find(char => char.name === charName)
  return result
}

const rollDice = (amount) => {
  return Math.floor(Math.random() * amount) + 1
}

const baseGold = (goldInput) => {
  let total
  let diceResults = []
  if (goldInput.baseGold) {
    total = goldInput.baseGold
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

const aplMultiplier = (inputData, tempLoot) => {
  if (inputData.indLevel) {
    tempLoot *= inputData.indLevel
  } else {
    error.formError(indPartyLevel, "Average Player Level is required to calculate loot")
  }

  return tempLoot
}

const calcChance = (charData, inputData) => {
  const randomRoll = Math.floor(Math.random() * 100)

  const defaultCheck = randomRoll < charData.treasureChance.default

  let result = false
  if(charData.treasureChance.range) {
    if(inputData.rating) {
      if (inputData.rating >= charData.treasureChance.range.from) {
        if (randomRoll < charData.treasureChance.range.percentage) {
          result = true
        }
      } else {
        if (defaultCheck) {
          result = true
        }
      }
    } else {
      error.formError(rating, "Challenge Rating is required to calculate loot");
    }
  } else if (defaultCheck) {
    result = true
  }

  return result
}

const loot = (inputData) => {
  const charData = findChar(inputData.charType)

  let getLoot = calcChance(charData, inputData)

  let totalLoot = 0

  let tempGold = baseGold(charData.baseGp)
  let tempMod = charData.settings[inputData.fantasyMod]
  let tempLoot = tempGold.total * tempMod

  if (charData.modifier !== 1) {
    tempLoot = aplMultiplier(inputData, tempLoot)
  }

  totalLoot = tempLoot
  
  return {
    charData: charData,
    diceRolls: tempGold.diceRolls,
    lootTotal: totalLoot,
    formData: inputData,
    getLoot: getLoot,
  }
}

export const init = (lootData) => {
  return loot(lootData)
}