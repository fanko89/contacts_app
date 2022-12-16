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
UI.prototype.createContact = function(personalContact){
  //add contact to UI
  let parent = document.querySelector('.outputUL');
  let textTemplate = `
                 <li class="contactOutput">
                 <i class="fas fa-times-circle"></i>
                  <span class="title">${personalContact.name}</span>
                  <p>${personalContact.email}<br>
                    ${personalContact.phoneNumber} <br>
                   <strong>${personalContact.text}</strong><br>
                  </p>
                  <a href="#!" class="secondary-content"><i class="far fa-address-card"></i>
                   <i class="fas fa-times-circle"> <button type="button " class="btn btn-secondary">deleteContact</button> </i>
                 </a>
                </li>
                `
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
UI.prototype.deleteContact = function(e){
  let parent = document.querySelector('.outputUL');
  parent.addEventListener('click', function(e){
    // check if the target element is the delete button
    if (e.target.classList.contains('btn-secondary')) {
      // find the parent `li` element of the button
      let contactItem = e.target.parentElement.parentElement.parentElement;
      // remove the parent `li` element
      parent.removeChild(contactItem);
    }
  })
}



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


   //set up if/else statement to make sure everything is inputed 
  
   if(name === '' || email === '' || phone === '' || text === ''){
    let alertbtn = document.querySelector('.btn-red');
    alertbtn.style.display = 'block';
       } else{
   //set up UI prototype to add contact to list and display
   const ui = new UI();
   ui.createContact(personalContact);
   ui.clearForm(personalContact);
   ui.deleteContact(info.personalContact);
   console.log(personalContact)

  }

//set up UI prototype to delete contact. Add Event listener to X button

  


 info.preventDefault();
}















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
  
  //add event listener to delete button
  let deleteButton = parent.querySelector('.btn-secondary');
  deleteButton.addEventListener('click', function(e) {
    // find the parent `li` element of the button
    let contactItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    // delete the contact
    UI.deleteContact(contactItem);
  });
  
  // add contact name to dropdown list
  let dropdownList = document.querySelector('#contactSelect');
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.classList.add('dropdown-item');
  link.textContent = personalContact.name;
  listItem.appendChild(link);
  dropdownList.appendChild(listItem);
}

//

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

//add deleteContact function to UI
UI.prototype.deleteContact = function(contactItem) {
  let parent = document.querySelector('.outputUL');
  // remove the parent `li` element
  parent.removeChild(contactItem);
}



//delete contact
let contactItems = document.querySelectorAll('.contactOutput');
for (let contactItem of contactItems) {
  contactItem.addEventListener('click', function(e) {
    // check if the target element is the delete button
    if (e.target.classList.contains('btn-secondary')) {
      // remove the parent `li` element
      contactItem.parentElement.removeChild(contactItem);
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



// add default "Select a contact" option to dropdown menu

//delete contact
let parent = document.querySelector('.outputUL');
parent.addEventListener('click', function(e) {
  // check if the target element is the delete button
  if (e.target.classList.contains('btn-secondary')) {
    // find the parent `li` element of the button
    let contactItem = e.target.parentElement.parentElement.parentElement;
    // remove the parent `li` element
    parent.removeChild(contactItem);
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



























// let todos =[
//   {
//       name: "Finish Homework",
//       phone: "34503450",
//       email: "derek@yourserver.com",
//       text: "school"
//   },
//   {
//     name: "you youyou",
//     phone: "2343250",
//     email: "derek34433.com",
//     text: "help"
// }
// ]
// localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
// let nameCat= ["school"]
// let filterByCategory = undefined

// // getting all required elements
// let todoList = document.querySelector(".outputUL");
// let todoName = document.querySelector(".name");
// let todoPhone = document.querySelector(".phone");
// let todoEmail = document.querySelector(".email");
// let todoInput = document.querySelector(".text");
// let addBtn = document.querySelector(".addContact");
// let clearBtn = document.querySelector(".deleteContact");
// let addCategoryBtn = document.querySelector(".addContact");
// let newCategoryName = document.querySelector(".name");
// let selectCategoryList = document.querySelector("#catList")
// let filterCategoryList = document.querySelector("#contactSelect")
// let editCategoryButton = document.querySelector("#contactSelect")
// let editCategoryText = document.querySelector(".editCategoryName")
// let editCategoryInput = document.querySelector("#editCategoryInput")
// let editCategoryConfirmButton = document.querySelector("#contactSelect")
// let editCategoryDeleteButton = document.querySelector(".deleteContact")


// filterCategoryList.addEventListener("change",() => {
// if (filterCategoryList.selectedIndex === 0) {
//   filterByCategory = undefined
// } else {
//   filterByCategory = filterCategoryList.value
// }
// renderTodos(false)
// })

// // editCategoryButton.onclick = () => {
// // const categoryIndex = filterCategoryList.selectedIndex

// // if (categoryIndex !== 0) {
// //   const categoryText = filterCategoryList.value
// //   editCategoryInput.hidden = false
// //   editCategoryText.value = categoryText
// // }
// // }

// // delete a category
// editCategoryDeleteButton.onclick = () => {
// const categoryIndex = filterCategoryList.selectedIndex
// const oldName = categories[categoryIndex-1]

// //deleting existing todos
// todos = todos.filter((todo) => {
//   if (todo.category !== oldName) {
//     return todo
//   }
// })
// localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));

// // changing the value in the nameCatlist
// nameCat= categories.filter((category) => {
//   if (category !== oldName) {
//     return category
//   }
// })

// // re-render everything
// renderTodos()
// }

// //edit a category
// editCategoryConfirmButton.onclick = () => {
// const categoryIndex = filterCategoryList.selectedIndex
// const newName = editCategoryText.value
// if (categories.includes(newName)) {
//   renderTodos()
//   return
// }
// const oldName = categories[categoryIndex-1]

// // replacing category on existing todos
// todos = todos.map((todo) => {
//   if (todo.category === oldName) {
//     todo.category = newName
//   }
//   return todo
// })
// localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));

// // changing the value in the nameCatlist
// const indexToReplace = categories.findIndex((element) => {return element === oldName})
// categories[indexToReplace] = newName

// // re-render everything
// renderTodos()
// }

// addCategoryBtn.onclick = () => {
// categoryText = newCategoryName.value;
// if (categoryText === "") return;
// if (categories.includes(categoryText)) return;
// categories.push(categoryText)
// renderTodos()
// addCategoryBtn.classList.remove("active");
// newCategoryName.value = "";
// };

// addBtn.onclick = () => {
// let todoName = todoName.value;
// let todoPhone = todoPhone.value;
// let todoEmail = todoEmail.value;
// let todoText = todoText.value;


// // determine category
// let categoryIndex = selectCategoryList.selectedIndex
// let nameCategory = undefined
// if (categoryIndex !== 0) {
//   nameCategory = selectCategoryList.value
// }
// if (todos == null) {
//   todos = []; 
// } else {
//   todos = todos; 
// }

// if (todoName === "") {
//   console.error("no empty text allowed");
// } else {
//   todos.push({name: name, phone: phone, email: email,  text: text, });
//   renderTodos();
//   addBtn.classList.remove("active");
// }
// todoText.value = "";
// todoName.value = "";
// todoPhone.value = "";
// todoEmail.value = "";

// };


// //rendering task
// function renderTodos(refreshNameCat = true) {
// // editCategoryInput.hidden = true
// let todoData = localStorage.getItem("TodoLocalStorage");
// console.table(todoData)
// if (todoData == null) {
//   todos = [];
// } else {
//   todos = JSON.parse(todoData);
// }
// // const pendingTasksNumb = document.querySelector(".tasksLeft");
// // pendingTasksNumb.textContent = todos.length;
// if (todos.length > 0) {
//   clearBtn.classList.add("active"); 
// } else {
//   clearBtn.classList.remove("active"); 
// }
// let newLiTag = "";
// todos.forEach((element, index) => {

//   if (element.name === filterByCategory || filterByCategory === undefined || refreshNameCat) {
 
//       newLiTag += `    <li class="contactOutput">
//                          <i class="fas fa-times-circle"></i>
//                           <span class="title">${element.name}</span>
//                           <p>${element.email}<br>
//                             ${element.phone} <br>
//                            <strong>${element.text}</strong><br>
//                           </p>
//                         <button type="button " class="btn btn-secondary onclick="deleteTodo(${index})">deleteContact</button>
//                         </li>`
    
//   }
// });
// todoList.innerHTML = newLiTag;
// if (refreshNameCat) {
//   renderCategories()
// }
// }

// function renderCategories() {
// let newHTML = "";
// selectCategoryOption =  `<li><a class="dropdown-item">Select Contact</a></li>`
// filterByCategoryOption = `<li><a class="dropdown-item">Filter By Name</a></li>`

// nameCat.forEach((element, index) => {
//   newHTML += `<li><a class="dropdown-item" on>${element}</a></li>`
// })

// if (nameCat.length === 0) {
//   newHTML = `<li><a class="dropdown-item">Select Contact</a></li>`
//   selectCategoryList.innerHTML = newHTML
//   filterCategoryList.innerHTML = newHTML
// } else {
//   selectCategoryList.innerHTML = selectCategoryOption + newHTML
//   filterCategoryList.innerHTML = filterByCategoryOption + newHTML
// }
// }

// // function completeTodo(id) {
// // todos[id].completed = !todos[id].completed
// // localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
// // renderTodos()
// // }

// // delete function
// function deleteTodo(index) {
// let todoData = localStorage.getItem("TodoLocalStorage");
// todos = JSON.parse(todoData);
//   todos.splice(index, 1);
//   localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
//   renderTodos();
// }

// // // change UI to show edit around the todo
// // function editTodo(id) {
// // todos[id].editing = true
// // localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
// // renderTodos()
// // }

// // // change UI to show edit around the todo
// // function updateTodo(id) {
// // const text = document.querySelector(".editTodo").value
// // // todos[id].editing = false
// // todos[id].text = text
// // todos[id].completed = false
// // localStorage.setItem("TodoLocalStorage", JSON.stringify(todos));
// // renderTodos()
// // }

// // delete list
// clearBtn.onclick = () => {
// todos = []; 
// localStorage.setItem("TodoLocalStorage", JSON.stringify(todos)); 
// renderTodos(); 
// };

// // initial render
// renderTodos();

