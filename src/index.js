// TODO: Create module to add eventlistner

//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getcompleted = false;

let getTitle2 = "Groceries";
let gettask2 = "Buy a peach";
let getdueDate2 = "Next monday";
let getpriority2 = "High";
let getNotes2 = "The peach is to make peach pie tart";
let getcompleted2 = false;

let getTitle3 = "Movie";
let gettask3 = "Date Night";
let getdueDate3 = "Next saturday";
let getpriority3 = "medium";
let getNotes3 = "Going to go with Jay and see the new Avatar 2 movie";
let getcompleted3 = false;

let getTitle4 = "Meeting";
let gettask4 = "Date Night";
let getdueDate4 = "Next saturday";
let getpriority4 = "medium";
let getNotes4 = "Going to go with Jay and see the new Avatar 2 movie";
let getcompleted4 = false;

let getTitle5 = "Lessons";
let gettask5 = "Date Night";
let getdueDate5 = "Next saturday";
let getpriority5 = "medium";
let getNotes5 = "Going to go with Jay and see the new Avatar 2 movie";
let getcompleted5 = false;
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

function createTodo(title, task, duedate, priority, notes, completed) {
  const newTodo = new Todo(title, task, duedate, priority, notes, completed);
  newTodo.listiner();
  todoList.push(newTodo);
  return newTodo;
}

// createTodo(getTitle, gettask, getdueDate, getpriority, getNotes, getcompleted);
// createTodo(getTitle2, gettask2, getdueDate2, getpriority2, getNotes2, getcompleted2);
// createTodo(getTitle3, gettask3, getdueDate3, getpriority3, getNotes3, getcompleted3);
// createTodo(getTitle4, gettask4, getdueDate4, getpriority4, getNotes4, getcompleted4);
// createTodo(getTitle5, gettask5, getdueDate5, getpriority5, getNotes5, getcompleted5);

// console.log(todoList);

//Remove controller (Works fine one for one)
// todoList[0].changecompleted(); //Preparation
// todoList[1].changecompleted(); //Groceries
// todoList[2].changecompleted(); //Movies
// todoList[3].changecompleted(); //Meeting
// todoList[4].changecompleted(); //Lessons

// removeController();

// console.log(todoList);

//// ! RemoveController Module
// function removeController() {
//   for (let todos of todoList) {
//     switch (todos.completed) {
//       case false: {
//         //do nothing
//         break;
//       }
//       case true: {
//         removeFromList(todos);
//         break;
//       }
//     }
//   }
// }

// function removeFromList(todos) {
//   removedList.push(todos);
//   console.log(todoList.indexOf(todos));
//   todoList.splice(todoList.indexOf(todos), 1);
// }

// console.log("todoList");
// console.log(todoList);
// console.log("removedList");
// console.log(removedList);

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
  // console.log(`Path1`);
  // console.log(formTitleEl.value);
  // console.log(formTaskeEl.value);
  // console.log(datetimeeEl.value);
  // console.log(formPriorityEl.value);
  // console.log(formNoteseEl.value);
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

//* Add delete button for todos
//? Add new todoList
//? New todoList goes in the content HTML
//? New todoList option also goes in form list for TodoLists
//? Give the ability to remove the new Todolist
//? Completed todoList cannot be removed
