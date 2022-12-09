let outputText = document.getElementById('outputText')
console.log()





//rendering task
function renderTodos() {
    editCategoryInput.hidden = true
    let contactData = localStorage.getItem("TodoLocalStorage");
    console.table(contactData)
    if (contactData == null) {
      textOutput = [];
    } else {
      todos = JSON.parse(todoData);
    }
    const pendingTasksNumb = document.querySelector(".tasksLeft");
    pendingTasksNumb.textContent = todos.length;
    if (todos.length > 0) {
      clearBtn.classList.add("active"); 
    } else {
      clearBtn.classList.remove("active"); 
    }
    let newLiTag = "";
    todos.forEach((element, index) => {
  
      if (element.category === filterByCategory || filterByCategory === undefined || refreshCategories) {
        if (element.editing) {
          newLiTag += `<li><input type="text" class="editTodo"  placeholder=${element.text}><span class="icon" onclick="updateTodo(${index})"><i class="fa-solid fa-check"></i></span></li>`;
        } else if (element.completed) {
          newLiTag += `<li onclick="completeTodo(${index})"><s>${element.text} ${element.category ? `(${element.category})` : ""}</s><span class="icon" onclick="deleteTodo(${index})"><i class="fas fa-trash"></i></span></li>`;
        } else {
          newLiTag += `<li onclick="completeTodo(${index})">${element.text} ${element.category ? `(${element.category})` : ""}<span class="icon" onclick="editTodo(${index})"><i class="fas fa-edit"></i></span></li>`;
        }
      }
    });
    todoList.innerHTML = newLiTag;
    if (refreshCategories) {
      renderCategories()
    }
  }