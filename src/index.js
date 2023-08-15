// 1. Create class for a todo object
// 2. todo object pushed to array
// 3. Connect array objects to html elements
// 4. function to render array

class CreateTodo {
  constructor(title, description, dueDate, priority, notes, removeTitle) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = notes);
    this.removeTitle = removeTitle;
  }
  removeTodo() {
    this.removeTitle = true;
  }
}

let todoList = [];

let getTitle = "Preperation";
let getDescription = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";
let getRemoveTitle = false;

function createTodo(title, description, dueDate, priority, notes, remove) {
  let newTodo = new CreateTodo(title, description, dueDate, priority, notes, remove);
  todoList.push(newTodo);
  return newTodo;
}

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes, getRemoveTitle);

getTitle = "Groceries";
getDescription = "Buy a peach";
getdueDate = "Next Monday";
getpriority = "High";
getNotes = "The peach is to make peach pie tart";
getRemoveTitle = false;

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes, getRemoveTitle);

console.log(todoList);
console.log(todoList[1].removeTodo());
console.log(todoList);
