import { elements } from './base'

const totalTemplate = (content, subcontent = '') => {
  return `<h2>${content}<small>${subcontent}</small></h2>`
}

const treasureTotals = (formData, charData, gold, gems, art, magicItems) => {
  let goldTotal = ``, gemsTotal = ``, artTotal = ``, itemsTotal = ``

  goldTotal = totalTemplate(gold.total + " GP", goldCalculations(formData, charData, gold))
  
  if (charData.gems) {
    let gemsContent = `${gems.total} x ${charData.gems.worth} gems`;
    let gemsSubcontent = ``
    if (charData.gems.diceToRoll) {
      gemsSubcontent = `${charData.gems.diceToRoll} (${gems.diceRolls.join(' + ')})`
    }
    if (charData.gems.type) {
      gemsSubcontent += `${charData.gems.type}`
    }
    gemsTotal = totalTemplate(gemsContent, gemsSubcontent)
  }

  if (charData.art) {
    let artContent = `${art.total} ${charData.art.worth ? charData.art.worth : ''} art object(s)`
    let artSubcontent = ``
    if (charData.art.diceToRoll) {
      artSubcontent = `${charData.art.diceToRoll} (${art.diceRolls.join(' + ')})`
    }
    if (charData.art.other) {
      artSubcontent += `${charData.art.other}`
    }

    artTotal = totalTemplate(artContent, artSubcontent)
  }

  if (charData.magicItem) {
    let itemContent = `${magicItems.total} magic items`;
    let itemSubcontent = ``
    if(charData.magicItem.diceToRoll) {
      itemSubcontent = `${charData.magicItem.diceToRoll} (${magicItems.diceRolls.join(' + ')})`
    }
    itemsTotal = totalTemplate(itemContent, itemSubcontent);
  }

  return `${goldTotal}${gemsTotal}${artTotal}${itemsTotal}`;
}

const goldCalculations = (formData, charData, gold) => {
  let goldContent = ``
  if (!charData.gold.base) {
    goldContent += `${charData.gold.diceToRoll} (${gold.diceRolls.join(' + ')})`;
  }

  if (charData.gold.multiplier) {
    goldContent += ` X ${charData.gold.multiplier}`
  }

  if (charData.gold.apl) {
    goldContent += ` X ${formData.hoardLevel}`;
  }
  return goldContent
}

export const init = (formData, charData, gold, gems, art, magicItems) => {
  elements.treasureContainer.innerHTML = `<div class="treasure-result">
                                            ${treasureTotals(formData, charData, gold, gems, art, magicItems)}
                                          </div>`;
}