import * as error from '../helpers/errorHandler'
import * as find from './findController'
import * as dice from './rollController'

const baseGold = (goldInput) => {
  let goldTotal
  let diceResults = []
  if (goldInput.baseGold) {
    goldTotal = goldInput.baseGold;
  } else {
    let { total, rolls } = dice.rollMultiple(goldInput.diceAmount, goldInput.diceType);
    goldTotal = total;
    diceResults = rolls;
  }
  
  return {
    total: goldTotal,
    diceRolls: diceResults,
  };
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

export const init = (lootData) => {
  const charData = find.findIndividual(lootData.charType);

  let getLoot = calcChance(charData, lootData);

  let totalLoot = 0;

  let tempGold = baseGold(charData.baseGp);
  let tempMod = charData.settings[lootData.fantasyMod];
  let tempLoot = tempGold.total * tempMod;

  if (charData.modifier !== 1) {
    tempLoot = aplMultiplier(lootData, tempLoot);
  }

  totalLoot = tempLoot;

  return {
    charData: charData,
    diceRolls: tempGold.diceRolls,
    lootTotal: totalLoot,
    formData: lootData,
    getLoot: getLoot,
  };
}