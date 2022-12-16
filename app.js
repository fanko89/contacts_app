//set up Object Constructor
function Contact(name, email, phone, text){
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.text = text;
}

//set up UI constructor
function UI (){};

//set up prototypes of UI to add and delete contacts

//add contact
UI.prototype.createContact = function() {
  // create empty object to store contact information
  let personalContact = {};
  // fill the object with data from the form fields
  personalContact.name = document.querySelector('.name').value;
  personalContact.email = document.querySelector('.email').value;
  personalContact.phone = document.querySelector('.phone').value;
  personalContact.text = document.querySelector('.text').value;

  // add contact to UI
  let parent = document.querySelector('.outputUL');
  let textTemplate = `
    <li class="contactOutput" style="list-style-type:none">
      <div class="card" style="width: 30rem;">
        <div class="card-body">
          <i class="fas fa-times-circle"></i>
          <h5 class="card-title"><strong>${personalContact.name}</strong></h5>
          <p>
            Email Address: ${personalContact.email}<br>
            Phone Number: ${personalContact.phone}<br>
            Note: ${personalContact.text}<br>
          </p>
          <a href="#!" class="secondary-content">
            <i class="far fa-address-card"></i>
            <i class="fas fa-times-circle">
              <button type="button " class="btn btn-secondary delete-button">deleteContact</button>
            </i>
          </a>
        </div>
      </div>
    </li>
  `;
  parent.insertAdjacentHTML('beforeend', textTemplate);  
  // add contact name to dropdown list
  let dropdownList = document.querySelector('#contactSelect');
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.classList.add('dropdown-item');
  link.textContent = personalContact.name;
  listItem.appendChild(link);
  dropdownList.appendChild(listItem);
}

// add event listener to dropdown list
let dropdownList = document.querySelector('#contactSelect');
dropdownList.addEventListener('click', function(e) {
  // check if the target element is a list item
  if (e.target.classList.contains('dropdown-item')) {
    // get the selected list item's text
    let selectedName = e.target.textContent;
    // search for the corresponding contact in the list
    let contactItems = document.querySelectorAll('.contactOutput');
    for (let contactItem of contactItems) {
      if (contactItem.querySelector('.card-title').textContent == selectedName) {
        // show the selected contact
        contactItem.style.display = 'block';
      } else {
        // hide the other contacts
        contactItem.style.display = 'none';
      }}}});

// add default "Select a contact" option to dropdown menu
// delete contact
UI.prototype.deleteContact = function() {
  let parent = document.querySelector('.outputUL');
  parent.addEventListener('click', function(e){
    // check if the target element is the delete button
    if (e.target.classList.contains('delete-button')) {
      // find the parent `li` element of the delete button
      let contactItem = e.target.closest('.contactOutput');
      // remove the parent `li` element
      parent.removeChild(contactItem);
      // remove the contact name from the dropdown list
      let dropdownList = document.querySelector('#contactSelect');
      let contactLinks = dropdownList.querySelectorAll('.dropdown-item');
      for (let contactLink of contactLinks) {
        if (contactLink.textContent == contactItem.querySelector('.card-title').textContent) {
          dropdownList.removeChild(contactLink.parentNode);
          break;
        }
        // add error handling here
      }
    }
  });
}
//clear fields
UI.prototype.clearForm = function(){
  document.querySelector('.name').value = '',
  document.querySelector('.email').value = '',
  document.querySelector('.phone').value = '',
  document.querySelector('.text').value = ''
}

//event listeners
document.querySelector('.addContact').addEventListener('click', function(e){
  //get form values
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const phone = document.querySelector('.phone').value;
  const text = document.querySelector('.text').value;

  //instantiate contact
  const personalContact = new Contact(name, email, phone, text);
  
  //instantiate UI
  const ui = new UI();

  //add contact to list
  ui.createContact(personalContact);

  //clear fields
  ui.clearForm();

  e.preventDefault();
});

//delete contact
const ui = new UI();
ui.deleteContact();
