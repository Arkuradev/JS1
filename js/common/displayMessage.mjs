// function to display error message to the user if something goes wrong.

export function displayMessage(container, messageType, message) {

  const parent = document.querySelector(container);
  parent.innerHTML = `<div class="message ${messageType}">${message}</div>`;

}