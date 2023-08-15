class AddTodo {
  constructor(title, text) {
    (this.title = title), (this.text = text);
  }
}

let todoList = [];

function createTodo(name, name2) {
  name = new AddTodo("Shopping", "get groceries");
  name2 = new AddTodo("Shopping2", "get groceries2");
  todoList.push(name, name2);
}

createTodo("todo1");

let name3 = new AddTodo("Shopping3", "get groceries3");
todoList.push(name3);

console.log(todoList);
console.log(todoList[1]);
