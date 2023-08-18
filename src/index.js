//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getMyTodoList = "todolist";
let getcompleted = false;
let getdeleted = false;
// =====================================================

//! Variables
let todoList = [];
let removedList = [];
let newTodoLists = [];

//! Classes
class Todo {
  constructor(title, task, duedate, priority, notes, myTodoList, completed, deleted) {
    this.title = title;
    this.task = task;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.myTodoList = myTodoList;
    this.completed = completed;
    this.deleted = deleted;
    this.DOM = document.createElement("div");
    this.inputEl = document.createElement("input");
    this.titleEl = document.createElement("h3");
    this.taskEl = document.createElement("div");
    this.duedateEl = document.createElement("div");
    this.priorityEl = document.createElement("div");
    this.notesEl = document.createElement("div");
    this.delBtnEl = document.createElement("button");
    this.addBtnEl = document.createElement("button");
    this.editBtnEl = document.createElement("div");
    this.cancelBtnEl = document.createElement("button");
  }
  findIndex() {
    // <-------------------
    console.log(todoList.indexOf(this));
  }
  listener() {
    this.inputEl.addEventListener("change", () => {
      if (this.inputEl.checked) {
        this.completed = true;
      } else {
        this.completed = false;
      }
      completedRenderController();
    });
  }
  editBtn() {
    this.editBtnEl.addEventListener("click", () => {
      formTitleEl.setAttribute("value", this.title);
      formTaskeEl.setAttribute("value", this.task);
      datetimeeEl.setAttribute("value", this.duedate);
      formPriorityEl.setAttribute("value", this.priority);
      formNoteseEl.setAttribute("value", this.notes);
      todoSelect.setAttribute("value", this.myTodoList);
      addBtn.setAttribute("style", "display: none;");
      this.addBtnEl.setAttribute("style", "display: inline;");
      cancelBtn.setAttribute("style", "display: none;");
      this.cancelBtnEl.setAttribute("style", "display: inline;");
    });
  }
  addBtn() {
    this.addBtnEl.addEventListener("click", () => {
      (this.title = formTitleEl.value),
        (this.task = formTaskeEl.value),
        (this.duedate = datetimeeEl.value),
        (this.priority = formPriorityEl.value),
        (this.notes = formNoteseEl.value),
        (this.myTodoList = todoSelect.value);
      formTitleEl.removeAttribute("value");
      formTaskeEl.removeAttribute("value");
      datetimeeEl.removeAttribute("value");
      formPriorityEl.removeAttribute("value");
      formNoteseEl.removeAttribute("value");
      todoSelect.removeAttribute("value");
      formTodo.reset();
      this.addBtnEl.setAttribute("style", "display: none;");
      addBtn.setAttribute("style", "display: inline;");
      cancelBtn.setAttribute("style", "display: inline;");
      this.cancelBtnEl.setAttribute("style", "display: none;");

      completedRenderController();
    });
  }
  delBtn() {
    this.delBtnEl.addEventListener("click", () => {
      this.deleted = true;
      completedRenderController();
    });
  }
  cancelBtnTodo() {
    this.cancelBtnEl.addEventListener("click", () => {
      this.addBtnEl.setAttribute("style", "display: none;");
      this.cancelBtnEl.setAttribute("style", "display: none;");
      useCancel();
    });
  }

  changecompleted() {
    this.completed = true;
  }
}
class NewListSection {
  constructor(name) {
    this.name = name;
    this.listSection = document.createElement("div");
    this.sectiontitleEl = document.createElement("h1");
    this.listName = document.createElement("div");
    this.listOption = document.createElement("option");
  }
}

//! Create Class variable
function createTodo(title, task, duedate, priority, notes, myTodoList, completed, deleted) {
  const newTodo = new Todo(title, task, duedate, priority, notes, myTodoList, completed, deleted);
  newTodo.listener();
  newTodo.delBtn();
  todoList.push(newTodo);
  newTodo.findIndex();
  newTodo.editBtn();
  newTodo.addBtn();
  newTodo.cancelBtnTodo();
  return newTodo;
}
function createNewListSection(name) {
  const newList = new NewListSection(name);
}

//! DOM Cache Module
const addNewTodoBtnEl = document.getElementById("addBtn");
const todolistEl = document.getElementById("todolist");
const completedlist = document.getElementById("completedlist");
const formTodo = document.getElementById("formTodo");
const formList = document.getElementById("formList");
const formTitleEl = document.getElementById("formTitle");
const formTaskeEl = document.getElementById("formTask");
const datetimeeEl = document.getElementById("datetime-local");
const formPriorityEl = document.getElementById("formPriority");
const formNoteseEl = document.getElementById("formNotes");
const todoSelect = document.getElementById("todoSelect");
const addNewListSection = document.getElementById("addNewListSection");
const btnNewListSection = document.getElementById("btnNewListSection");
const myLists = document.querySelector(".myLists");
const cancelbtnNewListSection = document.getElementById("cancelbtnNewListSection");
const cancelBtn = document.getElementById("cancelBtn");

//! Remove HTML Elements Module
function removeElements() {
  const todoListDivsEl = document.querySelectorAll("#todolist > *");
  todoListDivsEl.forEach((divs) => {
    divs.remove();
  });
}

//! Fetch Form Info Module
function getFormInfo() {
  createTodo(
    formTitleEl.value,
    formTaskeEl.value,
    datetimeeEl.value,
    formPriorityEl.value,
    formNoteseEl.value,
    todoSelect.value,
    false,
    false
  );
  formTodo.reset();
  completedRenderController();
}

//! Form Info List Controller
function getNewFormListInfo() {
  newTodoLists.push(new NewListSection(addNewListSection.value));
  formList.reset();
  renderNewList();
}

//! Listen Module
addNewTodoBtnEl.addEventListener("click", () => {
  getFormInfo();
});
btnNewListSection.addEventListener("click", () => {
  event.preventDefault();
  getNewFormListInfo();
});
cancelbtnNewListSection.addEventListener("click", useCancel);
cancelBtn.addEventListener("click", useCancel);

//! Completed Render Controller Module
function completedRenderController() {
  removeElements();
  todoList.forEach((todos) => {
    switch (todos.completed) {
      case false: {
        renderController(todos);
        break;
      }
      case true: {
        removeRenderController(todos);
        break;
      }
    }
  });
}

//! Render Conroller Remove Module
function removeRenderController(todos) {
  switch (todos.deleted) {
    case true: {
      removeController(todos);
      break;
    }
    case false: {
      completedRender(todos);
      break;
    }
  }
}

//! Render Controller Module
function renderController(todos) {
  if (todos.myTodoList == "todolist") {
    defaultRender(todos);
  } else {
    newTodoLists.forEach((list) => {
      switch (list.name) {
        case todos.myTodoList: {
          todoRender(list, todos);
          break;
        }
      }
    });
  }
}

//! Render Remove Module
function removeController(todos) {
  todos.DOM.remove();
  //Do nothing
  //Welcome to the void. After 3 days to lazy to
  //impletement delete function.
}

//! Render Module
function todoRender(list, todos) {
  list.listName.appendChild(todos.DOM);
  renderOptimizer(todos);
  todos.delBtnEl.setAttribute("style", "display: none;");
  todos.DOM.appendChild(todos.delBtnEl);
}
function defaultRender(todos) {
  todolistEl.appendChild(todos.DOM);
  renderOptimizer(todos);
  todos.delBtnEl.setAttribute("style", "display: none;");
  todos.DOM.appendChild(todos.delBtnEl);
}
function completedRender(todos) {
  completedlist.appendChild(todos.DOM);
  renderOptimizer(todos);
  todos.delBtnEl.setAttribute("style", "display: inline;");
  todos.DOM.appendChild(todos.delBtnEl);
}

//! Render Optimizer
function renderOptimizer(todos) {
  todos.DOM.setAttribute("class", "cards");
  todos.inputEl.setAttribute("type", "checkbox");
  todos.inputEl.setAttribute("id", "checkbox");
  todos.inputEl.setAttribute("name", "checkbox");
  todos.inputEl.setAttribute("value", "checked");
  todos.DOM.appendChild(todos.inputEl);
  todos.titleEl.textContent = todos.title;
  todos.DOM.appendChild(todos.titleEl);
  todos.taskEl.textContent = todos.task;
  todos.DOM.appendChild(todos.taskEl);
  todos.duedateEl.textContent = todos.duedate;
  todos.DOM.appendChild(todos.duedateEl);
  todos.priorityEl.textContent = todos.priority;
  todos.DOM.appendChild(todos.priorityEl);
  todos.notesEl.textContent = todos.notes;
  todos.DOM.appendChild(todos.notesEl);
  todos.editBtnEl.textContent = "⋮";
  todos.DOM.appendChild(todos.editBtnEl);
  todos.addBtnEl.textContent = "Edit";
  todos.addBtnEl.setAttribute("style", "display: none;");
  addNewTodoBtnEl.insertAdjacentElement("afterend", todos.addBtnEl);
  todos.cancelBtnEl.textContent = "Cancel";
  todos.cancelBtnEl.setAttribute("style", "display: none;");
  todos.addBtnEl.insertAdjacentElement("afterend", todos.cancelBtnEl);
  todos.delBtnEl.textContent = "X";
}

//! Render New List
function renderNewList() {
  newTodoLists.forEach((list) => {
    list.sectiontitleEl.textContent = list.name;
    list.listSection.setAttribute("class", "list");
    list.listName.setAttribute("id", `${list.name}`);
    myLists.prepend(list.listSection);
    list.listSection.appendChild(list.sectiontitleEl);
    list.listSection.appendChild(list.listName);
    list.listOption.setAttribute("value", `${list.name}`);
    list.listOption.textContent = list.name;
    todoSelect.appendChild(list.listOption);
  });
}

//! Cancel functionality
function useCancel() {
  formTitleEl.removeAttribute("value");
  formTaskeEl.removeAttribute("value");
  datetimeeEl.removeAttribute("value");
  formPriorityEl.removeAttribute("value");
  formNoteseEl.removeAttribute("value");
  todoSelect.removeAttribute("value");
  addNewListSection.removeAttribute("value");
  addBtn.setAttribute("style", "display: inline;");
  cancelBtn.setAttribute("style", "display: inline;");
  formTodo.reset();
  formList.reset();
}
