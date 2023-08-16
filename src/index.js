// TODO: Create module to add eventlistner

//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getcompleted = false;

// =====================================================

//Variables
let todoList = [];
let removedList = [];

class Todo {
  constructor(title, task, duedate, priority, notes, completed) {
    this.title = title;
    this.task = task;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
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
      this.completed = true;
      renderController();
    });
  }
  changecompleted() {
    this.completed = true;
  }
}

function createTodo(title, task, duedate, priority, notes, completed) {
  const newTodo = new Todo(title, task, duedate, priority, notes, completed);
  newTodo.listiner();
  todoList.push(newTodo);
  return newTodo;
}

// createTodo(getTitle, gettask, getdueDate, getpriority, getNotes, getcompleted);

//! DOM Cache Module
const addBtnEl = document.getElementById("addBtn");
const todolistEl = document.getElementById("todolist");
const completedlist = document.getElementById("completedlist");
const form = document.querySelector("form");
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

//!Fetch From Info Module
function getFormInfo() {
  todoList.push(
    createTodo(formTitleEl.value, formTaskeEl.value, datetimeeEl.value, formPriorityEl.value, formNoteseEl.value, false)
  );
  form.reset();
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
        break;
      }
      case true: {
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
        break;
      }
    }
  });
}
