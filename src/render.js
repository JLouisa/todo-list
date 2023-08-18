// const theRenderer = (() => {
//   //! Render Module
//   function todoRender(list, todos) {
//     list.listName.appendChild(todos.DOM);
//     renderOptimizer(todos);
//     todos.delBtnEl.setAttribute("style", "display: none;");
//     todos.DOM.appendChild(todos.delBtnEl);
//   }
//   function defaultRender(todos) {
//     todolistEl.appendChild(todos.DOM);
//     renderOptimizer(todos);
//     todos.delBtnEl.setAttribute("style", "display: none;");
//     todos.DOM.appendChild(todos.delBtnEl);
//   }
//   function completedRender(todos) {
//     completedlist.appendChild(todos.DOM);
//     renderOptimizer(todos);
//     todos.delBtnEl.setAttribute("style", "display: inline;");
//     todos.DOM.appendChild(todos.delBtnEl);
//   }

//   //! Render Optimizer
//   function renderOptimizer(todos) {
//     todos.DOM.setAttribute("class", "cards");
//     todos.inputEl.setAttribute("type", "checkbox");
//     todos.inputEl.setAttribute("id", "checkbox");
//     todos.inputEl.setAttribute("name", "checkbox");
//     todos.inputEl.setAttribute("value", "checked");
//     todos.DOM.appendChild(todos.inputEl);
//     todos.titleEl.textContent = todos.title;
//     todos.DOM.appendChild(todos.titleEl);
//     todos.taskEl.textContent = todos.task;
//     todos.DOM.appendChild(todos.taskEl);
//     todos.duedateEl.textContent = todos.duedate;
//     todos.DOM.appendChild(todos.duedateEl);
//     todos.priorityEl.textContent = todos.priority;
//     todos.DOM.appendChild(todos.priorityEl);
//     todos.notesEl.textContent = todos.notes;
//     todos.DOM.appendChild(todos.notesEl);
//     todos.editBtnEl.textContent = "⋮";
//     todos.DOM.appendChild(todos.editBtnEl);
//     todos.addBtnEl.textContent = "Edit";
//     todos.addBtnEl.setAttribute("style", "display: none;");
//     addNewTodoBtnEl.insertAdjacentElement("afterend", todos.addBtnEl);
//     todos.cancelBtnEl.textContent = "Cancel";
//     todos.cancelBtnEl.setAttribute("style", "display: none;");
//     todos.addBtnEl.insertAdjacentElement("afterend", todos.cancelBtnEl);
//     todos.delBtnEl.textContent = "X";
//   }
//   return { todoRender, defaultRender, completedRender };
// })();

// export { theRenderer };
