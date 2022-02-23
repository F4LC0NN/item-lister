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

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button'; 
  item.appendChild(deleteButton);

  // Create an event to remove an item from the list
  // Animate the button when the events fire
  deleteButton.addEventListener('click', removeItem);

  // Create an icon for the delete button
  const deleteButtonIcon = document.createElement('span');
  deleteButtonIcon.classList = 'material-icons delete-icon';
  deleteButtonIcon.textContent = 'delete_outline';
  deleteButton.appendChild(deleteButtonIcon);

  // Create a function to trigger the delete button and remove an item from the list
  function removeItem(event) {
    if (event.target.classList.contains('delete-button') || event.target.classList.contains('delete-icon')) {
      list.removeChild(item);
    }
  }
}

/*
------------------------------------------------
FILTER ITEMS
------------------------------------------------
*/
// Select the search input element
const searchBar = document.querySelector('#search-bar');

// Create an event listener to trigger the fitering event
searchBar.addEventListener('keyup', filterItems);