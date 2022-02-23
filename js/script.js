/*
------------------------------------------------
SELECT ELEMENTS
------------------------------------------------
*/

const list = document.querySelector('#list-group');
const input = document.querySelector('#add-item-bar');
const submitButton = document.querySelector('#submit-button');

/*
------------------------------------------------
CREATE ITEMS
------------------------------------------------
*/

// Create an event to add item to list by clicking on the submit button
submitButton.addEventListener('click', addRemoveItems);

// Create a function to add items
function addRemoveItems(event) {
  // Prevent the items to disappear whenever the submit button is clicked
  event.preventDefault();

  // Check if the input value is empty
  // If the input value is empty, deactivate the submit button
  let inputValue = input.value;
  if (inputValue === '') {
    return;
  }

  // Create an li element called item
  const item = document.createElement('li');
  item.className = "list-item";
  item.textContent = input.value;
  list.appendChild(item);

  // Create an event to remove an item from the list
  // Animate the button when the events fire
  deleteButton.addEventListener('click', removeItem);
}