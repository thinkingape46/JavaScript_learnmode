let myForm = document.getElementById("to-do-form")
let myTask = document.getElementById("add-item")
let myList = document.getElementById("to-do-list")


myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createTask(myTask.value)
})

function createTask(task) {
    
    let insertHtml = `<li>${task}<button id="task" onclick="deleteTask(this)">delete</button></li>`
    myList.insertAdjacentHTML("beforeend", insertHtml)
    myTask.value = ""
    myTask.focus()
}

function deleteTask(taskToDelete) {
    taskToDelete.parentElement.remove()
}