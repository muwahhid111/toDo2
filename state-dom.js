const inp = document.querySelector("#inp");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const inputWrapper = document.querySelector(".inputWrapper");
const toDoData = [];

const render = () => {
  toDoData.map((item, index) => {
    // создание узлов
    const listItem = document.createElement("div");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("input");

    // свойства текста таски
    listItem.classList.add("listItem");
    listItem.textContent = item.text;
    if (item.done) {
      listItem.classList.add("done");
    }

    // свойства кнопки удаление
    delBtn.textContent = "x";

    // свойства чекбокса
    checkBtn.type = "checkbox";

    // добавление в HTML
    listItem.append(delBtn);
    listItem.prepend(checkBtn);
    list.append(listItem);

    // удаление таски
    delBtn.addEventListener("click", () => {
      list.innerHTML = "";
      toDoData.splice(index, 1);
      render();
    });
    console.log((checkBtn.checked = item.done));

    // выполнить таск
    checkBtn.addEventListener("change", (e) => {
      if (checkBtn.checked) {
        item.done = true;
        e.target.parentElement.classList.add("done");
      } else {
        item.done = false;
        e.target.parentElement.classList.remove("done");
      }
    });
  });
};

// добавление таски
inputWrapper.addEventListener("submit", (e) => {
  if (inp.value) {
    list.innerHTML = "";
    toDoData.push({
      text: inp.value,
      done: false,
    });
    render();
    inp.value = "";
  }
  console.log(toDoData);

  e.preventDefault();
});