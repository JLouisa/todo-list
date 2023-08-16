// TODO: Create module to add eventlistner

//Test Variables
let getTitle = "Preperation";
let getDescription = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getRemoveTitle = false;

let getTitle2 = "Groceries";
let getDescription2 = "Buy a peach";
let getdueDate2 = "Next monday";
let getpriority2 = "High";
let getNotes2 = "The peach is to make peach pie tart";
let getRemoveTitle2 = false;

let getTitle3 = "Movie";
let getDescription3 = "Date Night";
let getdueDate3 = "Next saturday";
let getpriority3 = "medium";
let getNotes3 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle3 = false;

let getTitle4 = "Meeting";
let getDescription4 = "Date Night";
let getdueDate4 = "Next saturday";
let getpriority4 = "medium";
let getNotes4 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle4 = false;

let getTitle5 = "Lessons";
let getDescription5 = "Date Night";
let getdueDate5 = "Next saturday";
let getpriority5 = "medium";
let getNotes5 = "Going to go with Jay and see the new Avatar 2 movie";
let getRemoveTitle5 = false;
// =====================================================

//Variables
let todoList = [];
let removedList = [];

class Todo {
  constructor(title, description, duedate, priority, notes, completed) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
    this.DOM = document.createElement("div");
  }
  name;
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

// function TodoFactory(title, description, duedate, priority, notes, removeTitle) {
//   const changeRemoveTitle = () => {
//     this.removeTitle = true;
//   };
//   return { title, description, duedate, priority, notes, removeTitle, changeRemoveTitle };
// }

function createTodo(title, description, duedate, priority, notes, removeTitle) {
  const newTodo = new Todo(title, description, duedate, priority, notes, removeTitle);
  newTodo.listiner();
  todoList.push(newTodo);
  return newTodo;
}

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes, getRemoveTitle);
createTodo(getTitle2, getDescription2, getdueDate2, getpriority2, getNotes2, getRemoveTitle2);
createTodo(getTitle3, getDescription3, getdueDate3, getpriority3, getNotes3, getRemoveTitle3);
createTodo(getTitle4, getDescription4, getdueDate4, getpriority4, getNotes4, getRemoveTitle4);
createTodo(getTitle5, getDescription5, getdueDate5, getpriority5, getNotes5, getRemoveTitle5);

// console.log(todoList);

//Remove controller (Works fine one for one)
// todoList[0].changeRemoveTitle(); //Preparation
// todoList[1].changeRemoveTitle(); //Groceries
// todoList[2].changeRemoveTitle(); //Movies
// todoList[3].changeRemoveTitle(); //Meeting
// todoList[4].changeRemoveTitle(); //Lessons

removeController();

// console.log(todoList);

//! RemoveController Module
function removeController() {
  for (let todos of todoList) {
    switch (todos.removeTitle) {
      case false: {
        //do nothing
        break;
      }
      case true: {
        removeFromList(todos);
        break;
      }
    }
  }
}

function removeFromList(todos) {
  removedList.push(todos);
  console.log(todoList.indexOf(todos));
  todoList.splice(todoList.indexOf(todos), 1);
}

console.log("todoList");
console.log(todoList);
console.log("removedList");
console.log(removedList);

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
