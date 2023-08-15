const getDOM = (() => {
  let i = 0;

  //DOM Caches
  const todoListEl = document.querySelector("#todolist");
  const addBtn = document.querySelector("#addBtn");

  //Listiners
  addBtn.addEventListener("click", () => {
    let divTodo = document.createElement("div");
    divTodo.textContent = `Todo ${i}`;
    todoListEl.appendChild(divTodo);
  });
})();

export { getDOM };
