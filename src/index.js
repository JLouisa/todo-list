// TODO: Create module to add eventlistner

//Test Variables
let getTitle = "Preperation";
let gettask = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getRemoveTitle = false;

let getTitle2 = "Groceries";
let gettask2 = "Buy a peach";
let getdueDate2 = "Next monday";
let getpriority2 = "High";
let getNotes2 = "The peach is to make peach pie tart";
let getcompleted = false;

let getTitle3 = "Movie";
let gettask3 = "Date Night";
let getdueDate3 = "Next saturday";
let getpriority3 = "medium";
let getNotes3 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle3 = false;

let getTitle4 = "Meeting";
let gettask4 = "Date Night";
let getdueDate4 = "Next saturday";
let getpriority4 = "medium";
let getNotes4 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle4 = false;

let getTitle5 = "Lessons";
let gettask5 = "Date Night";
let getdueDate5 = "Next saturday";
let getpriority5 = "medium";
let getNotes5 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle5 = false;
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
  }
  listiner() {
    this.DOM.addEventListener("click", () => {
      this.completed = true;
      render();
    });
  }
  changeRemoveTitle() {
    this.completed = true;
  }
}

function createTodo(title, task, duedate, priority, notes, removeTitle) {
  const newTodo = new Todo(title, task, duedate, priority, notes, removeTitle);
  newTodo.listiner();
  todoList.push(newTodo);
  return newTodo;
}

createTodo(getTitle, gettask, getdueDate, getpriority, getNotes, getRemoveTitle);
createTodo(getTitle2, gettask2, getdueDate2, getpriority2, getNotes2, getcompleted);
createTodo(getTitle3, gettask3, getdueDate3, getpriority3, getNotes3, getRemoveTitle3);
createTodo(getTitle4, gettask4, getdueDate4, getpriority4, getNotes4, getRemoveTitle4);
createTodo(getTitle5, gettask5, getdueDate5, getpriority5, getNotes5, getRemoveTitle5);

//! DOM Cache Module
const addBtnEl = document.getElementById("addBtn");
const todolistEl = document.getElementById("todolist");

//! Remove HtML Elements Module
function removeElements() {
  const todoListDivsEl = document.querySelectorAll("#todolist > *");
  todoListDivsEl.forEach((divs) => {
    divs.remove();
  });
}

//! Listener Module
addBtnEl.addEventListener("click", () => {
  render();
});

//! Render Module
function render() {
  removeElements();
  todoList.forEach((todos) => {
    switch (todos.completed) {
      case false: {
        todos.DOM.textContent = todos.title;
        todolistEl.appendChild(todos.DOM);
        break;
      }
      case true: {
        //Do Nothing
        break;
      }
    }
  });
}
