
const createAppTittle = (tittle) => {
  let appTittle = document.createElement("h2");
  appTittle.innerHTML = tittle;
  
  return appTittle;
};

const createTodoItemForm = () => {
  let form = document.createElement("form");
  let input = document.createElement("input");
  let buttonWrapper = document.createElement("div");
  let button = document.createElement("button");

  form.classList.add("input-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Введите название новой задачи";
  buttonWrapper.classList.add("input-group-append");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Добавить задачу";
  button.setAttribute("disabled", true);

  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      button.removeAttribute("disabled");
    }

    if (input.value.length <= 0) {
      button.setAttribute("disabled", true);
    }
  });

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button,
  };
};

const createTodoList = () => {
  let list = document.createElement("ul");
  list.classList.add("list-group");
  
  return list;
};

const createTodoItem = (name, done = false) => {
  const ready = done;
  let item = document.createElement("li");
  let buttonGroup = document.createElement("div");
  let doneButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  item.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  
  if (ready) {
    item.classList.add("list-group-item-success");
  }
  item.textContent = name;

  buttonGroup.classList.add("btn-group", "btn-group-sm");
  doneButton.classList.add("btn", "btn-success");
  doneButton.textContent = "Готово";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Удалить";

  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  return {
    item,
    doneButton,
    deleteButton,
  };
};

const createTodoApp = (container, title = "Список задач") => {
  let todoAppTitle = createAppTittle(title);
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();
  let url = document.location.pathname;
  url = url.split("/").pop();

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  let storageItems = [];
  let todoItems = [
    {
      name: "Создать 2 таска",
      done: true,
    },
    {
      name: "Поменять им свойство",
      done: false,
    },
  ];

  const click = (item, local = true) => {
    item.doneButton.addEventListener("click", () => {
      item.item.classList.toggle("list-group-item-success");

      let a = item.item.childNodes[0].textContent;
      a = storageItems.findIndex((el) => el.name == a);
      
      let condition = storageItems[a].done;
      
      
      if (condition) {
        condition = false;
      } else {
        condition = true;
      }
      storageItems[a].done = condition;

      localStorage.setItem(
        `${storageItems[a].id}`,
        JSON.stringify(storageItems[a])
      );
    });

    item.deleteButton.addEventListener("click", () => {
      if (confirm("Вы уверены?")) {
        item.item.remove();

        let storage = local;

        if (storage) {
          let id = item.item.childNodes[0].textContent;
          id = storageItems.findIndex((el) => el.name == id);

          let sort = Object.entries(localStorage).sort();
          storageItems.splice(id, 1);
          localStorage.removeItem(`${sort[id][0]}`);
        }
      }
    });
  };

  const log = () => {
    let arr = [];
    let storageItem;
    let testItem;

    for (k in Object.keys(localStorage)) {
      arr.push(localStorage.key(k));
      arr.sort();
    }

    for (j in arr) {
      if (arr[j].includes("my") || arr[j].includes("mom") || arr[j].includes("dad")) {
        storageItems.push(JSON.parse(localStorage.getItem(arr[j])));
      }
    }

    for (q in todoItems) {
      testItem = createTodoItem(todoItems[q].name, todoItems[q].done);
      todoList.append(testItem.item);

      click(testItem, false);
    }

    if (url == "index.html") {
      for (i in storageItems) {
        if (storageItems[i].who == "my") {
          storageItem = createTodoItem(
            storageItems[i].name,
            storageItems[i].done
          );
          todoList.append(storageItem.item);

          click(storageItem);
        }
      }
    }

    if (url == "dad.html") {
      for (i in storageItems) {
        if (storageItems[i].who == "dad") {
          storageItem = createTodoItem(
            storageItems[i].name,
            storageItems[i].done
          );
          todoList.append(storageItem.item);

          click(storageItem);
        }
      }
    }

    if (url == "mom.html") {
      for (i in storageItems) {
        if (storageItems[i].who == "mom") {
          storageItem = createTodoItem(
            storageItems[i].name,
            storageItems[i].done
          );
          todoList.append(storageItem.item);

          click(storageItem);
        }
      }
    }
  };

  log();

  todoItemForm.form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!todoItemForm.input.value) {
      return;
    }

    todoItem = createTodoItem(todoItemForm.input.value);
    
    if (url == "index.html") {
      localStorage.setItem(
        `my: ${localStorage.length}`,
        JSON.stringify({
          what: "todo",
          id: `my: ${localStorage.length}`,
          who: "my",
          name: todoItemForm.input.value,
          done: false,
        })
      );

      storageItems.push({
        what: "todo",
        id: `my: ${localStorage.length}`,
        who: "my",
        name: todoItemForm.input.value,
        done: false
      });
    }

    if (url == "dad.html") {
      localStorage.setItem(
        `dad: ${localStorage.length}`,
        JSON.stringify({
          what: "todo",
          id: `dad: ${localStorage.length}`,
          who: "dad",
          name: todoItemForm.input.value,
          done: false,
        })
      );

      storageItems.push({
        what: "todo",
        id: `dad: ${localStorage.length}`,
        who: "dad",
        name: todoItemForm.input.value,
        done: false
      });
    }

    if (url == "mom.html") {
      localStorage.setItem(
        `mom: ${localStorage.length}`,
        JSON.stringify({
          what: "todo",
          id: `mom: ${localStorage.length}`,
          who: "mom",
          name: todoItemForm.input.value,
          done: false,
        })
      );

      storageItems.push({
        what: "todo",
        id: `mom: ${localStorage.length}`,
        who: "mom",
        name: todoItemForm.input.value,
        done: false
      });
    }

    click(todoItem);

    todoList.append(todoItem.item);
    todoItemForm.input.value = "";
    todoItemForm.button.setAttribute("disabled", true);
  });
};

let url = document.location.pathname;
url = url.split("/").pop();

if (url == "index.html") {
  document.addEventListener("DOMContentLoaded", () => {
    createTodoApp(document.getElementById("todo-app"), "Мои задачи");
  });
}

if (url == "dad.html") {
  document.addEventListener("DOMContentLoaded", () => {
    createTodoApp(document.getElementById("todo-app"), "Папины задачи");
  });
}

if (url == "mom.html") {
  document.addEventListener("DOMContentLoaded", () => {
    createTodoApp(document.getElementById("todo-app"), "Мамины задания");
  });
}

window.createTodoApp = createTodoApp;