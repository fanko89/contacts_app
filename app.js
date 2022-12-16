// //set up Object Constructor
// function Contact(name, email, phone, text){
//   this.name = name;
//   this.email = email;
//   this.phone = phone;
//   this.text = text;
// }
// //set up UI constructor

// function UI (){};


// //set up prototypes of UI to add and delete contacts

// //add contact
// UI.prototype.createContact = function(personalContact){
//   //add contact to UI
//   let parent = document.querySelector('.outputUL');
//   let textTemplate = `
//                  <li class="contactOutput">
//                  <i class="fas fa-times-circle"></i>
//                   <span class="title">${personalContact.name}</span>
//                   <p>${personalContact.email}<br>
//                     ${personalContact.phoneNumber} <br>
//                    <strong>${personalContact.text}</strong><br>
//                   </p>
//                   <a href="#!" class="secondary-content"><i class="far fa-address-card"></i>
//                    <i class="fas fa-times-circle"> <button type="button " class="btn btn-secondary">deleteContact</button> </i>
//                  </a>
//                 </li>
//                 `
//       parent.insertAdjacentHTML('beforeend', textTemplate);
      
//   // add contact name to dropdown list
//   let dropdownList = document.querySelector('#contactSelect');
//   let listItem = document.createElement('li');
//   let link = document.createElement('a');
//   link.classList.add('dropdown-item');
//   link.textContent = personalContact.name;
//   listItem.appendChild(link);
//   dropdownList.appendChild(listItem);
// }


// // add event listener to dropdown list
// let dropdownList = document.querySelector('#contactSelect');
// dropdownList.addEventListener('click', function(e) {
//   // check if the target element is a list item
//   if (e.target.classList.contains('dropdown-item')) {
//     // get the selected list item's text
//     let selectedName = e.target.textContent;
//     // search for the corresponding contact in the list
//     let contactItems = document.querySelectorAll('.contactOutput');
//     for (let contactItem of contactItems) {
//       if (contactItem.querySelector('.title').textContent == selectedName) {
//         // show the selected contact
//         contactItem.style.display = 'block';
//       } else {
//         // hide the other contacts
//         contactItem.style.display = 'none';
//       }
//     }
//   }
// });

// // add default "Select a contact" option to dropdown menu


// //delete contact
// UI.prototype.deleteContact = function(e){
//   let parent = document.querySelector('.outputUL');
//   parent.addEventListener('click', function(e){
//     // check if the target element is the delete button
//     if (e.target.classList.contains('btn-secondary')) {
//       // find the parent `li` element of the button
//       let contactItem = e.target.parentElement.parentElement.parentElement;
//       // remove the parent `li` element
//       parent.removeChild(contactItem);
//     }
//   })
// }



// //clear fields
// UI.prototype.clearForm = function(){
// document.querySelector('.name').value = '',
// document.querySelector('.email').value = '',
// document.querySelector('.phone').value = '',
// document.querySelector('.text').value = ''
     
// }




// //Add Event Listener to Button once submited and call each of these functions

// let btn = document.querySelector('.addContact');
// btn.addEventListener('click', enterContact);


// function enterContact(info) {
//   //get variables of the form
//   let name = document.querySelector('.name').value,
//       email = document.querySelector('.email').value,
//       phone = document.querySelector('.phone').value,
//       text = document.querySelector('.text').value; 

// //create an object of the information from 

//    const personalContact = new Contact(name,email,phone, text);


//    //set up if/else statement to make sure everything is inputed 
  
//    if(name === '' || email === '' || phone === '' || text === ''){
//     let alertbtn = document.querySelector('.btn-red');
//     alertbtn.style.display = 'block';
//        } else{
//    //set up UI prototype to add contact to list and display
//    const ui = new UI();
//    ui.createContact(personalContact);
//    ui.clearForm(personalContact);
//    ui.deleteContact(info.personalContact);
//    console.log(personalContact)

//   }

// //set up UI prototype to delete contact. Add Event listener to X button

  


//  info.preventDefault();
// }















//set up Object Constructor
function Contact(name, email, phone, text){
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.text = text;
}

//set up UI constructor
function UI (){};

//add deleteContact function to UI
UI.prototype.deleteContact = function(contactItem) {
  let parent = document.querySelector('.outputUL');
  // remove the parent `li` element
  parent.removeChild(contactItem);
}

//add contact
UI.prototype.createContact = function(personalContact){
  //add contact to UI
  let parent = document.querySelector('.outputUL');
  let textTemplate = `
  <li class="contactOutput" style="list-style-type:none">
  <div class="card" style="width: 30rem;">
  <div class="card-body">
  <i class="fas fa-times-circle"></i>
  <h5 class="card-title"><strong>${personalContact.name}</strong></h5>
   <p>Email Address: ${personalContact.email}<br>
   Phone Number: ${personalContact.phone}<br>
   Note: ${personalContact.text}<br>
   </p>
   <a href="#!" class="secondary-content"><i class="far fa-address-card"></i>
    <i class="fas fa-times-circle"> <button type="button " class="btn btn-secondary">deleteContact</button> </i>
  </a>
  </div>
  </div>
 </li>

                `
      parent.insertAdjacentHTML('beforeend', textTemplate);
      
  // add contact name to dropdown list
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
      if (contactItem.querySelector('.title').textContent == selectedName) {
        // show the selected contact
        contactItem.style.display = 'block';
      } else {
        // hide the other contacts
        contactItem.style.display = 'none';
      }
    }
  }
});

// add default "Select a contact" option to dropdown menu

//delete contact
let parent = document.querySelector('.outputUL');
parent.addEventListener('click', function(e) {
  // check if the target element is the delete button
  if (e.target.classList.contains('btn-secondary')) {
    // find the parent `li` element of the button
    let contactItem = e.target.parentElement.parentElement.parentElement;
    // remove the parent `li` element
    contactItem.parentElement.removeChild(contactItem);
  }
});
//clear fields
UI.prototype.clearForm = function(){
  document.querySelector('.name').value = '',
  document.querySelector('.email').value = '',
  document.querySelector('.phone').value = '',
  document.querySelector('.text').value = ''
     
}

//Add Event Listener to Button once submited and call each of these functions

let btn = document.querySelector('.addContact');
btn.addEventListener('click', enterContact);

function enterContact(info) {
  //get variables of the form
  let name = document.querySelector('.name').value,
      email = document.querySelector('.email').value,
      phone = document.querySelector('.phone').value,
      text = document.querySelector('.text').value; 

//create an object of the information from 

   const personalContact = new Contact(name,email,phone, text);


   //create instance of UI
   const ui = new UI();
   
   
   //clear fields
   ui.clearForm();
   //create contact
   ui.createContact(personalContact);
   //delete contact
   ui.deleteContact(info);

  //prevent default
  info.preventDefault();

}