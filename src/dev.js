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

function createTodo(title, description, dueDate, priority, notes, remove) {
  let newTodo = new CreateTodo(title, description, dueDate, priority, notes, remove);
  todoList.push(newTodo);
  return newTodo;
}

createTodo(getTitle, getDescription, getdueDate, getpriority, getNotes, getRemoveTitle);
createTodo(getTitle2, getDescription2, getdueDate2, getpriority2, getNotes2, getRemoveTitle2);
createTodo(getTitle3, getDescription3, getdueDate3, getpriority3, getNotes3, getRemoveTitle3);

//Need to be targeted to enable .removeTodo()
console.log(todoList);
// console.log(todoList[0].removeTodo());
// console.log(todoList[1].removeTodo());
console.log(todoList[2].removeTodo());
console.log(todoList);

for (item of todoList) {
  switch (item.removeTitle) {
    case false: {
      //do nothing
      break;
    }
    case true: {
      console.log(`remove the Title "${item.title}" is true`);
      console.log(`will now remove "${item.title}" with index ${todoList.indexOf(item)} from list`);
      //send to remove module
      todoList.splice(todoList.indexOf(item), 1);
      break;
    }
  }
}

console.log(todoList);
