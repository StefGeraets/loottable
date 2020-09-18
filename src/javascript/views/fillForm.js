import { individual } from '../../data/individual';
import { elements } from './base'

const loadCharSelect = () => {
  elements.charTypeSelect.innerHTML = '';
  let optionList = '';
  individual.type.forEach((char, index) => {
    optionList += `<option value="${char.name}">${char.name}</option>`;
  })
  elements.charTypeSelect.innerHTML = optionList;
}

export const init = () => {
  loadCharSelect();
}