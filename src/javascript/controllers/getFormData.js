import { elements } from '../views/base'

const getCharType = () => {
  return elements.charTypeSelect.options[elements.charTypeSelect.selectedIndex].value
}

const getRating = () => {
  return elements.rating.value
}

const getIndLevel = () => {
  return elements.indPartyLevel.value
}

const getHoardLevel = () => {
  return elements.hoardPartyLevel.value
}

const getPartyMembers = () => {
  return elements.partyMember.value
}

const getFantasyMod = () => {
  return elements.fantasyMod.options[elements.fantasyMod.selectedIndex].value
}

const getIndividualOption = () => {
  return elements.radioIndividual.checked
}

const getHoardOption = () => {
  return elements.radioHoard.checked
}

export const init = () => {
  const formData = {
    charType: getCharType(),
    rating: getRating(),
    indLevel: getIndLevel(),
    hoardLevel: getHoardLevel(),
    partyMembers: getPartyMembers(),
    fantasyMod: getFantasyMod(),
    individual: getIndividualOption(),
    hoard: getHoardOption()
  }
  return formData
}