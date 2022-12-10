let outputText = document.getElementById('outputText')
console.log()





//rendering task
function rendercontacts() {
    editCategoryInput.hidden = true
    let contactData = localStorage.getItem("contactsLocalStorage");
    console.table(contactData)
    if (contactData == null) {
      textOutput = [];
    } else {
      contacts = JSON.parse(contactsData);
    }
    const pendingTasksNumb = document.querySelector(".tasksLeft");
    pendingTasksNumb.textContent = contacts.length;
    if (contacts.length > 0) {
      clearBtn.classList.add("active"); 
    } else {
      clearBtn.classList.remove("active"); 
    }
    let newLiTag = "";
    contacts.forEach((element, index) => {
  
      if (element.category === filterByCategory || filterByCategory === undefined || refreshCategories) {
        if (element.editing) {
          newLiTag += `<li><input type="text" class="editcontacts"  placeholder=${element.text}><span class="icon" onclick="updatecontacts(${index})"><i class="fa-solid fa-check"></i></span></li>`;
        } else if (element.completed) {
          newLiTag += `<li onclick="completecontacts(${index})"><s>${element.text} ${element.category ? `(${element.category})` : ""}</s><span class="icon" onclick="deletecontacts(${index})"><i class="fas fa-trash"></i></span></li>`;
        } else {
          newLiTag += `<li onclick="completecontacts(${index})">${element.text} ${element.category ? `(${element.category})` : ""}<span class="icon" onclick="editcontacts(${index})"><i class="fas fa-edit"></i></span></li>`;
        }
      }
    });
    contactsList.innerHTML = newLiTag;
    if (refreshCategories) {
      renderCategories()
    }
  } 

  // delete function
function deleteContact(index) {
  let contactsData = localStorage.getItem("contactsLocalStorage");
  contacts = JSON.parse(contactsData);
  if (contacts[index].completed) {
    contacts.splice(index, 1);
    localStorage.setItem("contactsLocalStorage", JSON.stringify(contacts));
    rendercontacts();
  }
}


// change UI to show edit around the contacts
function updatecontacts(id) {
  const text = document.querySelector(".editcontacts").value
  contacts[id].editing = false
  contacts[id].text = text
  contacts[id].completed = false
  localStorage.setItem("contactsLocalStorage", JSON.stringify(contacts));
  rendercontacts()
}

// delete list
clearBtn.onclick = () => {
  contacts = []; 
  localStorage.setItem("contactsLocalStorage", JSON.stringify(contacts)); 
  rendercontacts(); 
};

// initial render
rendercontacts();
