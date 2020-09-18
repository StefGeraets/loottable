import { elements } from '../views/base'

const handleMsg = (msg) => {
  elements.errorMsg.innerHTML = `<p class="active">${msg}</p>`
}

const handleFormElement = (formElement) => {
  formElement.parentElement.classList.add('error')
}

export const formError = (formElement, msg) => {
  handleMsg(msg)
  handleFormElement(formElement)
}