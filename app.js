// Create an empty array to store the contacts
let contacts = []

let output = document.querySelector(".output")
let addContact = document.querySelector(".addContact")
let name = document.querySelector(".name")
let phone = document.querySelector(".phone")
let email = document.querySelector(".phone")
let text = document.querySelector(".text")
let deleteContact = document.querySelector(".deleteContact")



addContact.onclick = () => {
  let todoText = todoInput.value;
  let todoData = localStorage.getItem("TodoLocalStorage");

  // determine category
  let categoryIndex = selectCategoryList.selectedIndex
  let category = undefined
  if (categoryIndex !== 0) {
    category = selectCategoryList.value
  }
  if (todoData == null) {
    todos = []; 
  } else {
    todos = JSON.parse(todoData); 
  }

  if (todoText === "") {
    console.error("no empty text allowed");
  } else {
    todos.push({text: todoText, completed: false, category});
    localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
    renderTodos();
    addBtn.classList.remove("active");
  }
  todoInput.value = "";
};


// Create a function to add a new contact to the array
function addContact() {
  // Get the values of the input fields


  name = name.toLowerCase();
  phone = phone.toLowerCase();
  text = text.toLowerCase();

   // Create a unique ID for the contact
   let id = "contact" + (Object.keys(contacts).length + 1);

  // Create an object to store the contact information
  let contact = {
    name: name,
    phone: phone,
    email: email,
    text: text,
  }
}


// Create a function to display the selected contact
function renderContacts() {
  // Get the name of the selected contact from the dropdown menu
  let name = document.getElementById("contactSelect").value

  // Find the contact object in the contacts array that has the selected name
  let contact = contacts.find((contactID) => contactID.name === name)

  // Display the contact information
  document.getElementById("displayName").innerHTML = contact.name
  document.getElementById("displayPhone").innerHTML = contact.phone
  document.getElementById("displayEmail").innerHTML = contact.email
  document.getElementById("displayText").innerHTML = contact.text
}

// Create a function to delete a contact
function deleteContact() {
  // Get the name of the selected contact from the dropdown menu
  let name = document.getElementById("contact-select").value

  // Find the index of the contact object in the contacts array that has the selected name
  let index = contacts.findIndex((contactID) => contactID.name === name)

  // Remove the contact from the contacts array using the index
  contacts.splice(index, 1)
}
