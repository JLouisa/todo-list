//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getMyTodoList = "todolist";
let getcompleted = false;
// =====================================================

//! Variables
let todoList = [];
let removedList = [];
let newTodoLists = [];

//! Classes
class Todo {
  constructor(title, task, duedate, priority, notes, myTodoList, completed) {
    this.title = title;
    this.task = task;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.myTodoList = myTodoList;
    this.completed = completed;
    this.DOM = document.createElement("div");
    this.titleEl = document.createElement("h3");
    this.taskEl = document.createElement("div");
    this.duedateEl = document.createElement("div");
    this.priorityEl = document.createElement("div");
    this.notesEl = document.createElement("div");
  }
  listener() {
    this.DOM.addEventListener("click", () => {
      if (this.completed == false) {
        this.completed = true;
      } else {
        this.completed = false;
      }
      completedRenderController();
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
function createTodo(title, task, duedate, priority, notes, myTodoList, completed) {
  const newTodo = new Todo(title, task, duedate, priority, notes, myTodoList, completed);
  newTodo.listener();
  todoList.push(newTodo);
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
  // completedRenderController();
});
btnNewListSection.addEventListener("click", () => {
  event.preventDefault();
  getNewFormListInfo();
});

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
        completedRender(todos);
        break;
      }
    }
  });
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

//! Render Module
function todoRender(list, todos) {
  todos.DOM.setAttribute("class", "cards");
  list.listName.appendChild(todos.DOM);
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
}
function defaultRender(todos) {
  todos.DOM.setAttribute("class", "cards");
  todolistEl.appendChild(todos.DOM);
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
}
function completedRender(todos) {
  todos.DOM.setAttribute("class", "cards");
  completedlist.appendChild(todos.DOM);
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
