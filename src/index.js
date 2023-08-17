// TODO: Create module to add eventlistner

//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getMyTodoList = "todolist";
let getcompleted = false;

// =====================================================

//Variables
let todoList = [];
let removedList = [];

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
  listiner() {
    this.DOM.addEventListener("click", () => {
      if (this.completed == false) {
        this.completed = true;
      } else {
        this.completed = false;
      }
      renderController();
    });
  }
  changecompleted() {
    this.completed = true;
  }
}

function createTodo(title, task, duedate, priority, notes, myTodoList, completed) {
  const newTodo = new Todo(title, task, duedate, priority, notes, myTodoList, completed);
  newTodo.listiner();
  todoList.push(newTodo);
  return newTodo;
}

// createTodo(getTitle, gettask, getdueDate, getpriority, getNotes, myTodoList, getcompleted);

//! DOM Cache Module
const addBtnEl = document.getElementById("addBtn");
const todolistEl = document.getElementById("todolist");
const completedlist = document.getElementById("completedlist");
const formTodo = document.getElementById("formTodo");
const formList = document.getElementById("formList");
const formTitleEl = document.getElementById("formTitle");
const formTaskeEl = document.getElementById("formTask");
const datetimeeEl = document.getElementById("datetime-local");
const formPriorityEl = document.getElementById("formPriority");
const formNoteseEl = document.getElementById("formNotes");

//! Remove HtML Elements Module
function removeElements() {
  const todoListDivsEl = document.querySelectorAll("#todolist > *");
  todoListDivsEl.forEach((divs) => {
    divs.remove();
  });
}

//! Fetch From Info Module
function getFormInfo() {
  todoList.push(
    createTodo(
      formTitleEl.value,
      formTaskeEl.value,
      datetimeeEl.value,
      formPriorityEl.value,
      formNoteseEl.value,
      todoSelect.value,
      false
    )
  );
  formTodo.reset();
}

//! Listener Module
addBtnEl.addEventListener("click", () => {
  getFormInfo();
  renderController();
});

let titleEl = document.createElement("h3");
let taskEl = document.createElement("div");

//! Render Controller Module
function renderController() {
  removeElements();
  todoList.forEach((todos) => {
    switch (todos.completed) {
      case false: {
        todoRender(todos);
        break;
      }
      case true: {
        completedRender(todos);
        break;
      }
    }
  });
}

//! Render Module
function todoRender(todos) {
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

//! New Section Class
let newTodoLists = [];
class NewListSection {
  constructor(name) {
    this.name = name;
    this.sectionEl = document.createElement("h1");
    this.listName = document.createElement("div");
    this.listOption = document.createElement("option");
  }
}

function createNewListSection(name) {
  const newList = new NewListSection(name);
}

const addNewListSection = document.getElementById("addNewListSection");
const btnNewListSection = document.getElementById("btnNewListSection");
const myLists = document.querySelector(".myLists");

btnNewListSection.addEventListener("click", () => {
  event.preventDefault();
  getNewFormListInfo();
});

function getNewFormListInfo() {
  console.log(addNewListSection.value);
  newTodoLists.push(new NewListSection(addNewListSection.value));
  console.log(newTodoLists);
  formList.reset();
  renderNewList();
}

function renderNewList() {
  newTodoLists.forEach((list) => {
    list.sectionEl.textContent = list.name;
    list.listName.setAttribute("id", `${list.name}list`);
    myLists.prepend(list.listName);
    myLists.prepend(list.sectionEl);
    list.listOption.setAttribute("value", `${list.name}list`);
    list.listOption.textContent = list.name;
    todoSelect.appendChild(list.listOption);
  });
}

//! Add new List to selection Options
const todoSelect = document.getElementById("todoSelect");

function newListController() {
  todoSelect.forEach((list) => {
    switch (list) {
      case true: {
      }
    }
  });
}
