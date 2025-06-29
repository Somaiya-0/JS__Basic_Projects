arr1 = JSON.parse(localStorage.getItem("todos")) || [];
dt1 = JSON.parse(localStorage.getItem("todoDates")) || [];

let arrElement = document.getElementById("todo_list");
let _date = document.getElementById("todo_date");

// Add a new to-do
function todo_enter() {
    arr1.push(arrElement.value);
    dt1.push(_date.value);
    saveToLocalStorage(); // Save updated arrays
    document.querySelector(".add_todo").innerHTML = todo_print();
    arrElement.value = '';
    _date.value = '';
}

// Save arrays to localStorage
function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(arr1));
    localStorage.setItem("todoDates", JSON.stringify(dt1));
}

function todo_print() {
    let todo_serial = '';
    for (let i = 0; i < arr1.length; i++) {
        const todoItem = arr1[i];
        const todoDate = dt1[i];
        todo_serial += `<p class="todo_item">${todoItem}</p> <p class="todo_item">${todoDate}</p> 
                        <button class="delb" onclick="remove_Item(${i})">Delete</button>`;
    }
    return todo_serial;
}

// Remove a to-do
function remove_Item(index) {
    arr1.splice(index, 1);
    dt1.splice(index, 1);
    saveToLocalStorage(); // Save updated arrays
    document.querySelector(".add_todo").innerHTML = todo_print();
}

// Load the to-do list on page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".add_todo").innerHTML = todo_print();
});
