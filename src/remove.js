import { removedList, todoList } from "./index.js";

//Remove module
function getRemoveTrue(list) {
  for (let item of list) {
    switch (item.removeTitle) {
      case false: {
        //do nothing
        break;
      }
      case true: {
        //send to remove module
        removeTodoItem(list.indexOf(item), item);
        break;
      }
      default: {
        //do nothing
        break;
      }
    }
  }
}

function removeTodoItem(index, item) {
  removedList.push(item);
  todoList.splice(index, 1);
  console.log(removedList);
}

export { getRemoveTrue };
