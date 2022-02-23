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