//Create Class
class CreateTodo {
  constructor(title, description, dueDate, priority, notes, removeTitle) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = notes);
    this.removeTitle = removeTitle;
  }
  identifier() {
    return `The Identifier is ${this.title}${this.priority}`;
  } //replace with addeventListener

  removeTodo() {
    this.removeTitle = true;
  }
}
// __________________________________________________________________

let todoList = [];
let removedList = [];

// Test Variables
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

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes, getRemoveTitle);
createTodo(getTitle2, getDescription2, getdueDate2, getpriority2, getNotes2, getRemoveTitle2);
createTodo(getTitle3, getDescription3, getdueDate3, getpriority3, getNotes3, getRemoveTitle3);
// __________________________________________________________________

// Create Instances
function createTodo(title, description, dueDate, priority, notes, remove) {
  let newTodo = new CreateTodo(title, description, dueDate, priority, notes, remove);
  todoList.push(newTodo);
  return newTodo;
}
// __________________________________________________________________

//Status Controller
for (item of todoList) {
  switch (item.removeTitle) {
    case false: {
      //do nothing
      break;
    }
    case true: {
      //send to remove module
      removeTodoItem(todoList.indexOf(item), item);
      break;
    }
    default: {
      //do nothing
      break;
    }
  }
}
// __________________________________________________________________

//Remove module
function removeTodoItem(index, item) {
  removedList.push(item);
  todoList.splice(index, 1);
  console.log(removedList);
}

console.log(`This is active Todo List`);
console.log(todoList);
console.log(`This is active Remove List`);
console.log(removedList);

let i = 0;

let dev = {
  title: `Todo`,
  getDescription: "Send email to John",
  getdueDate: "Next friday",
  getpriority: "Low",
  getNotes: "Plan in a meeting for the report",
  getRemoveTitle: false,
};
// __________________________________________________________________

//DOM Caches
const todoListEl = document.querySelector("#todolist");
const addBtn = document.querySelector("#addBtn");
// __________________________________________________________________

//Listiners
// function add() {
addBtn.addEventListener("click", () => {
  i++;
  let divTodo = document.createElement("div");
  divTodo.textContent = `${dev.title} ` + i;
  todoList.push(dev);
  removeDivs();
  render();
});
// }
// __________________________________________________________________

//render
function render() {
  for (let n of todoList) {
    // console.log(n);
    let k = document.createElement("div");
    k.textContent = n.title;
    todoListEl.appendChild(k);
  }
  console.log(todoList[todoList.length - 1].title);
}
function removeDivs() {
  const divsTodo = document.querySelectorAll("#todolist > div");
  divsTodo.forEach((n) => {
    n.remove();
  });
}
// __________________________________________________________________
