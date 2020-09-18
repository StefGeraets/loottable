// Styles
import '../scss/styles.scss'

import { individual } from '../data/individual'

import { elements } from './views/base'
import * as fillForm from './views/fillForm'
import * as lootUI from './views/lootUI'
import * as hoardUI from './views/hoardUI'

import * as formData from './controllers/getFormData'
import * as calculateForm from './controllers/calculateLoot'
import * as hoardLoot from './controllers/hoardLoot'

const clickFormButton = () => {
  elements.submitLoot.addEventListener('click', () => {
    const lootData = formData.init()
    if(lootData.individual) {
      const lootResults = calculateForm.init(lootData)
      lootUI.init(lootResults.formData, lootResults.charData, lootResults.diceRolls, lootResults.lootTotal, lootResults.getLoot)
    }
    if(lootData.hoard) {
      const hoardResults = hoardLoot.init(lootData);
      hoardUI.init(lootData, hoardResults.charData, hoardResults.gold, hoardResults.gems, hoardResults.art, hoardResults.magicItems)
    }
  })
}

const clickRadioButton = () => {
  elements.radioIndividual.addEventListener('click', (e) => {
    elements.hoardOptions.forEach((element) => {
      element.classList.remove('active')
      element.classList.add('hidden')
    })
    elements.individualOptions.forEach((element) => {
      element.classList.remove('hidden')
      element.classList.add('active')
    })
  })

  elements.radioHoard.addEventListener('click', (e) => {
    elements.individualOptions.forEach((element) => {
      element.classList.remove('active')
      element.classList.add('hidden')
    })
    elements.hoardOptions.forEach((element) => {
      element.classList.remove('hidden')
      element.classList.add('active')
    })
  })
}

// Initialize App
window.addEventListener('load', () => {
  fillForm.init()
  clickRadioButton()
  clickFormButton()
})

// Add Service Worker
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('SW registered: ', registration)
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}