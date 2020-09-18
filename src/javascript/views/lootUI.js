import { elements } from './base'

export const init = (formData, charData, diceResults, lootTotal, getLoot) => {
  let baseGoldCheck
  const goldInfo = charData.baseGp
  if (charData.baseGp.baseGold) {
    baseGoldCheck = `${goldInfo.baseGold}GP`
  } else {
    // baseGoldCheck = `${goldInfo.diceToRoll} <span>${diceResults.map((roll) => `${roll}`)}</span>`
    baseGoldCheck = `<span>${diceResults.join(' + ')}</span><div class="dice">${goldInfo.diceToRoll}</div>`
  }

  let crossSign = `<div class="times"><svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div>`

  let aplModifier = '';
  if (charData.modifier !== 1) {
    aplModifier = `<div><strong>Player Modifier</strong>${formData.indLevel}</div>${crossSign}`
  }

  const lootResult = `<div class="treasure-result">
                        <h2>${lootTotal} GP</h2>
                      </div>
                      <div class="treasure-calculation">
                        <div><strong>GP</strong> ${baseGoldCheck}</div>
                        ${crossSign}
                        ${aplModifier}
                        <div><strong>Fantasy Modifier</strong>${charData.settings[formData.fantasyMod]}</div>
                      </div>`
  
  const noLootResult = `<div class="treasure-result">
                          <h2>0 GP</h2>
                        </div>
                        <div class="treasure-calculation">Treasure Chance to low</div>`

  let htmlResult
  if (getLoot) {
    htmlResult = lootResult
  } else {
    htmlResult = noLootResult
  }
  elements.treasureContainer.innerHTML = htmlResult
}