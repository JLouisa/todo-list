import { format, parseISO } from "date-fns";
import "./styles.css";
import dots from "./images/threedots.svg";

const myTodoListPro = (() => {
  //! Variables
  let todoList = [];
  let removedList = [];

  let newTodoLists = [];

  //! Classes
  class Todo {
    constructor(title, task, duedate, priority, notes, myTodoList, completed, deleted) {
      this.title = title;
      this.task = task;
      this.duedate = duedate;
      this.priority = priority;
      this.notes = notes;
      this.myTodoList = myTodoList;
      this.completed = completed;
      this.deleted = deleted;
      this.DOM = document.createElement("div");
      this.inputEl = document.createElement("input");
      this.titleEl = document.createElement("h3");
      this.taskEl = document.createElement("div");
      this.duedateEl = document.createElement("div");
      this.priorityEl = document.createElement("div");
      this.notesEl = document.createElement("div");
      this.delBtnEl = document.createElement("button");
      this.addBtnEl = document.createElement("button");
      this.editBtnEl = document.createElement("button");
      this.cancelBtnEl = document.createElement("button");
      this.groupTodoITTEl = document.createElement("div");
      this.groupTodoRestEl = document.createElement("div");
    }
    listener() {
      this.inputEl.addEventListener("change", () => {
        if (this.inputEl.checked) {
          this.completed = true;
        } else {
          this.completed = false;
        }
        completedRenderController();
      });
    }
    editBtn() {
      this.editBtnEl.addEventListener("click", () => {
        formTodoContainerEl.setAttribute("style", "display: flex");
        formTitleEl.setAttribute("value", this.title);
        formTaskeEl.setAttribute("value", this.task);
        datetimeeEl.setAttribute("value", this.duedate);
        formPriorityEl.setAttribute("value", this.priority);
        formNoteseEl.setAttribute("value", this.notes);
        todoSelect.setAttribute("value", this.myTodoList);
        addBtn.setAttribute("style", "display: none;");
        this.addBtnEl.setAttribute("style", "display: inline;");
        cancelBtn.setAttribute("style", "display: none;");
        this.cancelBtnEl.setAttribute("style", "display: inline;");
      });
    }
    addBtn() {
      this.addBtnEl.addEventListener("click", () => {
        (this.title = formTitleEl.value),
          (this.task = formTaskeEl.value),
          (this.duedate = datetimeeEl.value),
          (this.priority = formPriorityEl.value),
          (this.notes = formNoteseEl.value),
          (this.myTodoList = todoSelect.value);
        formTitleEl.removeAttribute("value");
        formTaskeEl.removeAttribute("value");
        datetimeeEl.removeAttribute("value");
        formPriorityEl.removeAttribute("value");
        formNoteseEl.removeAttribute("value");
        todoSelect.removeAttribute("value");
        formTodo.reset();
        this.addBtnEl.setAttribute("style", "display: none;");
        addBtn.setAttribute("style", "display: inline;");
        cancelBtn.setAttribute("style", "display: inline;");
        this.cancelBtnEl.setAttribute("style", "display: none;");
        completedRenderController();
      });
    }
    delBtn() {
      this.delBtnEl.addEventListener("click", () => {
        this.deleted = true;
        completedRenderController();
      });
    }
    cancelBtnTodo() {
      this.cancelBtnEl.addEventListener("click", () => {
        formTodoContainerEl.setAttribute("style", "display: none");
        this.addBtnEl.setAttribute("style", "display: none;");
        this.cancelBtnEl.setAttribute("style", "display: none;");
        useCancel();
      });
    }
    changecompleted() {
      this.completed = true;
    }
    showDetails() {
      this.DOM.addEventListener("click", () => {
        switch (this.groupTodoRestEl.style.display) {
          case "flex": {
            this.groupTodoRestEl.style.display = "none";
            break;
          }
          case "none": {
            this.groupTodoRestEl.style.display = "flex";
            break;
          }
        }
      });
    }
  }
  class NewListSection {
    constructor(name) {
      this.name = name;
      this.listSection = document.createElement("div");
      this.sectiontitleEl = document.createElement("h1");
      this.listName = document.createElement("div");
      this.listOption = document.createElement("option");
      this.editBtnEl = document.createElement("button");
      this.groupEl = document.createElement("div");
      this.delListBtn = document.createElement("button");
    }
    editListBtn() {
      this.editBtnEl.addEventListener("click", () => {
        // this.delListBtn.style.display = "inline";
        switch (this.delListBtn.style.display) {
          case "inline": {
            this.delListBtn.style.display = "none";
            break;
          }
          case "none": {
            this.delListBtn.style.display = "inline";
            break;
          }
        }
      });
    }
    delListBtn2() {
      this.delListBtn.addEventListener("click", () => {
        this.listSection.remove();
        removeControllerList(newTodoLists.indexOf(this), newTodoLists);
      });
    }
    showEditBtn() {
      this.listSection.addEventListener("mouseover", () => {
        this.editBtnEl.style.visibility = "visible";
        // myFunction(this.editBtnEl);
      });
    }
    hideEditBtn() {
      this.listSection.addEventListener("mouseout", () => {
        this.editBtnEl.style.visibility = "hidden";
        // myFunction(this.editBtnEl);
      });
    }
  }

  //! Create Class variable
  function createTodo(title, task, duedate, priority, notes, myTodoList, completed, deleted) {
    const newTodo = new Todo(title, task, duedate, priority, notes, myTodoList, completed, deleted);
    newTodo.listener();
    newTodo.delBtn();
    todoList.push(newTodo);
    newTodo.editBtn();
    newTodo.addBtn();
    newTodo.cancelBtnTodo();
    newTodo.showDetails();
    return newTodo;
  }
  function createNewListSection(name, list) {
    const newList = new NewListSection(name);
    list.push(newList);
    newList.editListBtn();
    newList.delListBtn2();
    newList.showEditBtn();
    newList.hideEditBtn();
  }

  //! DOM Cache Module
  const addNewTodoBtnEl = document.getElementById("addBtn");
  const addNewListSection = document.getElementById("addNewListSection");
  const btnNewListSection = document.getElementById("btnNewListSection");
  const cancelBtn = document.getElementById("cancelBtn");
  const cancelbtnNewListSection = document.getElementById("cancelbtnNewListSection");
  const completedlist = document.getElementById("completedlist");
  const datetimeeEl = document.getElementById("datetime-local");
  const formTodo = document.getElementById("formTodo");
  const formList = document.getElementById("formList");
  const formTitleEl = document.getElementById("formTitle");
  const formTaskeEl = document.getElementById("formTask");
  const todolistEl = document.getElementById("todolist");
  const formPriorityEl = document.getElementById("formPriority");
  const formNoteseEl = document.getElementById("formNotes");
  const myLists = document.querySelector(".myLists");
  const todoSelect = document.getElementById("todoSelect");
  const addSectionList = document.getElementById("addSectionList");
  const formListContainer = document.querySelector(".formListContainer");
  const addTodoButtonEl = document.getElementById("addTodoButton");
  const formTodoContainerEl = document.querySelector(".formTodoContainer");

  //! Remove HTML Elements Module
  function removeElements() {
    const todoListDivsEl = document.querySelectorAll("#todolist > *");
    todoListDivsEl.forEach((divs) => {
      divs.remove();
    });
  }

  //! Listen Module
  addNewTodoBtnEl.addEventListener("click", () => {
    getFormInfo(
      formTitleEl.value,
      formTaskeEl.value,
      datetimeeEl.value,
      formPriorityEl.value,
      formNoteseEl.value,
      todoSelect.value,
      false,
      false
    );
    formTodoContainerEl.setAttribute("style", "display: none");
  });
  btnNewListSection.addEventListener("click", () => {
    getNewFormListInfo(newTodoLists, addNewListSection.value);
    formListContainer.setAttribute("style", "display:none");
  });
  cancelbtnNewListSection.addEventListener("click", () => {
    useCancel();
    formListContainer.setAttribute("style", "display:none");
  });
  cancelBtn.addEventListener("click", () => {
    useCancel();
    formTodoContainerEl.setAttribute("style", "display: none");
  });
  addSectionList.addEventListener("click", () => {
    formListContainer.setAttribute("style", "display:flex");
  });
  //

  addTodoButtonEl.addEventListener("click", () => {
    formTodoContainerEl.setAttribute("style", "display: flex");
  });

  //
  //! Fetch Form Info Controller
  //* Todos
  function getFormInfo(title, task, dateTime, priority, notes, todoSelect, completed, deleted) {
    createTodo(title, task, dateTime, priority, notes, todoSelect, completed, deleted);
    formTodo.reset();
    completedRenderController();
  }
  //* List
  function getNewFormListInfo(list, items) {
    createNewListSection(items, list);
    formList.reset();
    listRenderController();
  }

  //! Completed Render Controller Module
  function completedRenderController() {
    removeElements();
    todoList.forEach((todos) => {
      switch (todos.completed) {
        case false: {
          renderController(todos);
          break;
        }
        case true: {
          removeRenderController(todos);
          break;
        }
      }
    });
    saveTodoToLocalStorage(todoList);
  }

  //! Render Conroller Remove Module
  function removeRenderController(todos) {
    switch (todos.deleted) {
      case true: {
        removeController(todoList.indexOf(todos), todos);
        break;
      }
      case false: {
        completedRender(todos);
        break;
      }
    }
  }

  //! Render Controller Module
  function renderController(todos) {
    if (todos.myTodoList == "todolist") {
      defaultRender(todos);
    } else {
      newTodoLists.forEach((list) => {
        switch (list.name) {
          case todos.myTodoList: {
            todoRender(list, todos);
            break;
          }
        }
      });
    }
  }

  //! Render Remove Module
  function removeController(index, todos) {
    todos.DOM.remove();
    removedList.push(todos);
    todoList.splice(index, 1);
  }
  function removeControllerList(index, list) {
    list.splice(index, 1);
    listRenderController();
  }

  //! Render Module
  function todoRender(list, todos) {
    list.listName.appendChild(todos.DOM);
    renderOptimizer(todos);
  }
  function defaultRender(todos) {
    todolistEl.appendChild(todos.DOM);
    renderOptimizer(todos);
  }
  function completedRender(todos) {
    completedlist.appendChild(todos.DOM);
    renderOptimizer(todos);
    todos.editBtnEl.setAttribute("style", "display: none;");
    todos.delBtnEl.style.display = "inline";
  }

  //! Render Optimizer
  function renderOptimizer(todos) {
    todos.DOM.setAttribute("class", "cards");
    todos.inputEl.setAttribute("type", "checkbox");
    todos.inputEl.setAttribute("id", "checkbox");
    todos.inputEl.setAttribute("name", "checkbox");
    todos.inputEl.setAttribute("value", "checked");
    todos.groupTodoITTEl.setAttribute("class", "groupTodoTitle");
    todos.DOM.appendChild(todos.groupTodoITTEl);
    todos.groupTodoITTEl.appendChild(todos.inputEl);
    todos.titleEl.textContent = todos.title;
    todos.groupTodoITTEl.appendChild(todos.titleEl);
    todos.duedateEl.textContent = format(parseISO(todos.duedate), "EEEE, MMMM do, hh:mm a");
    todos.groupTodoITTEl.appendChild(todos.duedateEl);
    todos.editBtnEl.textContent = "edit";
    todos.editBtnEl.setAttribute("class", "styleBtn1");
    todos.groupTodoITTEl.appendChild(todos.editBtnEl);
    todos.groupTodoRestEl.style.display = "none";
    todos.groupTodoRestEl.setAttribute("class", "groupTodoRestEl");
    todos.DOM.appendChild(todos.groupTodoRestEl);
    todos.taskEl.textContent = `Task: ${todos.task}`;
    todos.groupTodoRestEl.appendChild(todos.taskEl);
    todos.priorityEl.textContent = `Priority: ${todos.priority}`;
    todos.groupTodoRestEl.appendChild(todos.priorityEl);
    todos.notesEl.textContent = `Notes: ${todos.notes}`;
    todos.groupTodoRestEl.appendChild(todos.notesEl);
    todos.addBtnEl.textContent = "Edit";
    todos.addBtnEl.setAttribute("style", "display: none;");
    todos.addBtnEl.setAttribute("class", "styleBtn1");
    addNewTodoBtnEl.insertAdjacentElement("afterend", todos.addBtnEl);
    todos.cancelBtnEl.textContent = "Cancel";
    todos.cancelBtnEl.setAttribute("style", "display: none;");
    todos.cancelBtnEl.setAttribute("class", "styleBtn2");
    todos.addBtnEl.insertAdjacentElement("afterend", todos.cancelBtnEl);
    todos.delBtnEl.textContent = "X";
    todos.delBtnEl.setAttribute("class", "styleBtn3");
    todos.groupTodoITTEl.appendChild(todos.delBtnEl);
    todos.delBtnEl.style.display = "none";
    todos.editBtnEl.style.display = "inline";
  }

  //! List Render Controller
  function listRenderController() {
    renderNewList();
    saveListToLocalStorage();
  }

  //! Render New List
  function renderNewList() {
    newTodoLists.forEach((list) => {
      myLists.prepend(list.listSection);
      list.listSection.setAttribute("class", "list");
      list.groupEl.setAttribute("class", "groupTitle");
      list.listSection.appendChild(list.groupEl);
      list.sectiontitleEl.textContent = list.name;
      list.groupEl.appendChild(list.sectiontitleEl);
      list.editBtnEl.textContent = "edit";
      list.editBtnEl.setAttribute("class", "styleBtn1");
      list.editBtnEl.style.visibility = "hidden";
      list.groupEl.appendChild(list.editBtnEl);
      list.delListBtn.textContent = "Delete";
      list.delListBtn.setAttribute("class", "styleBtn3");
      list.delListBtn.setAttribute("style", "display: none");
      list.groupEl.appendChild(list.delListBtn);
      list.listName.setAttribute("id", list.name);
      list.listSection.appendChild(list.listName);
      list.listOption.setAttribute("value", list.name);
      list.listOption.textContent = list.name;
      todoSelect.appendChild(list.listOption);
    });
  }

  //! Cancel functionality
  function useCancel() {
    formTitleEl.removeAttribute("value");
    formTaskeEl.removeAttribute("value");
    datetimeeEl.removeAttribute("value");
    formPriorityEl.removeAttribute("value");
    formNoteseEl.removeAttribute("value");
    todoSelect.removeAttribute("value");
    addNewListSection.removeAttribute("value");
    addBtn.setAttribute("style", "display: inline;");
    cancelBtn.setAttribute("style", "display: inline;");
    formTodo.reset();
    formList.reset();
  }

  //! Local Storage Module
  let listLocalStorage = [];
  let savedList = [];
  let todoLocalStorage;
  let savedTodo = [];

  //! Todo Storage Module
  function saveTodoToLocalStorage(thelist) {
    todoLocalStorage = [...thelist];
    localStorage.setItem("todos", JSON.stringify(todoLocalStorage));
  }
  function loadTodoFromLocalStorage() {
    savedTodo = JSON.parse(localStorage.getItem("todos"));
  }
  function loadTodo() {
    loadTodoFromLocalStorage();
    savedTodo.forEach((list) => {
      getFormInfo(
        list.title,
        list.task,
        list.duedate,
        list.priority,
        list.notes,
        list.myTodoList,
        list.completed,
        list.deleted
      );
    });
  }

  //! List Storage Module
  function saveListToLocalStorage() {
    listLocalStorage = [...newTodoLists];
    localStorage.setItem("todoList", JSON.stringify(listLocalStorage));
  }
  function loadListFromLocalStorage() {
    savedList = JSON.parse(localStorage.getItem("todoList"));
  }
  function loadList() {
    loadListFromLocalStorage();
    savedList.forEach((items) => {
      getNewFormListInfo(newTodoLists, items.name);
    });
  }

  //! Automatic load LocalStorage
  if (localStorage.todoList) {
    loadList();
  }
  if (localStorage.todos) {
    loadTodo();
  }
})();
