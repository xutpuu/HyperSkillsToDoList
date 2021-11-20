let tasksListArr = JSON.parse(localStorage.getItem("tasks")) || [];
//"Email David", "Create ideal user persona guide", "Write an app"

const addTaskButton = document.getElementById("add-task-button");
const inputTask = document.getElementById("input-task");
let taskList = document.getElementById("task-list");


function addTask(taskText) {
    let li = document.createElement("li");
    let cb = document.createElement("input");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    let spanBtn = document.createElement("span");
    cb.setAttribute("type", "checkbox");
    span.className = "task";
    span.textContent = taskText;
    spanBtn.className = "material-icons md-18";
    spanBtn.textContent = "highlight_off";
    btn.className = "delete-btn";

    btn.addEventListener("click", function () {
        deleteTask(this);
        tasksListArr.splice(tasksListArr.indexOf(taskText), 1);
        localStorage.setItem("tasks", JSON.stringify(tasksListArr));
    })

    function deleteTask(obj) {
        obj.parentNode.remove();
    }

    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(btn);
    btn.appendChild(spanBtn);
    taskList.appendChild(li);
}

function updateTaskList() {
    for (let i = 0; i < tasksListArr.length; i++) {
        addTask(tasksListArr[i]);
    }
}

addTaskButton.addEventListener("click", function () {
    if (inputTask.value.length > 0 )  {
        addTask(inputTask.value);
        tasksListArr.push(inputTask.value);
        localStorage.setItem("tasks", JSON.stringify(tasksListArr));
        inputTask.value = '';
    }
})


updateTaskList();