let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false
     },
];
// Bắt sự kiện click vào nút Add
//  Lấy giá trị trong ô input
// Thêm vào mảng todoList
//  Render thêm vào <ul>
//  Xóa ô input sau khi thêm vào mảng

const ul = document.getElementById("myUL");
const addBtn = document.querySelector(".addBtn");
const input = document.getElementById("myInput");

function renderTodo() {
    ul.innerHTML = "";
    todoList.forEach((todo)=> {
        const li = document.createElement("li");
        li.innerText = todo.task;
        ul.appendChild(li);
    })
}

addBtn.addEventListener("click", function () {
    const newTodo = {
        id: todoList.length + 1,
        task: input.value.trim(),
        completed: false
    }
    if (newTodo.task!== "") {
        todoList.push(newTodo)
        renderTodo();
    } else {
        alert("Vui lòng nhập công việc!");
    }
    input.value = "";
})

