class CreateTodo {
  constructor(title, description, dueDate, priority, notes) {
    (this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = notes);
  }
}

let todoList = [];

let getTitle = "Preperation";
let getDescription = "Send email to John";
let getdueDate = "Next friday";
let getpriority = "Low";
let getNotes = "Plan in a meeting for the report";

function createTodo(title, description, dueDate, priority, notes) {
  let newTodo = new CreateTodo(title, description, dueDate, priority, notes);
  todoList.push(newTodo);
}

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes);

getTitle = "Groceries";
getDescription = "Buy a peach";
getdueDate = "Next Monday";
getpriority = "High";
getNotes = "The peach is to make peach pie tart";

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes);

console.log(todoList);
