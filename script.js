// ul reference
const ul = document.querySelector("ul");

// todo list array
let toDoList = [];

// adds a todo to todo list on form submission
document.querySelector("#addTodo").addEventListener("submit", function(event) {
    event.preventDefault();
    let toDo = document.querySelector("#toDo").value;
    toDoList.push(toDo);

    // Maps array items into todo list items
    const template = toDoList.map(toDoListItem => `
        <li>${toDoListItem}</li>
    `);

    ul.innerHTML = template.join("");
});

