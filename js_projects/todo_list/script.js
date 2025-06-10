document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById("intput-content")
  const addButton = document.getElementById("input-btn")
  const todoList = document.getElementById("todo-list")

  let tasks = getContentFromStorage() || []
  console.log(tasks)
  tasks.forEach((task) => renderTask(task));

  addButton.addEventListener('click', () => {
    textContent = inputText.value.trim()
    if (textContent === "") return
    console.log("empty value saved")

    const task = {
      id: Date.now(),
      content: textContent,
      completed: false
    }
    tasks.push(task)
    saveContent()
    inputText.value = ""
    renderTask(task)
  })

  function saveContent() {
    localStorage.setItem('task', JSON.stringify(tasks))
  }

  function getContentFromStorage() {

    return JSON.parse(localStorage.getItem("task"))
  }

  function renderTask(task) {
    {
      console.log(task);
      
      let list_item = document.createElement('li')
      let deleteButton = document.createElement('button')
      deleteButton.textContent = "Delete"
      let li_span = document.createElement('span')
      if(task.completed) list_item.classList.add('completed')
      li_span.textContent = task.content
      list_item.appendChild(li_span)
      list_item.appendChild(deleteButton)
      list_item.addEventListener('click',(event)=>{
        if(event.target.tagName=='BUTTON') return
        task.completed = !task.completed
        li_span.classList.toggle('completed')
      })
      list_item.querySelector('button').addEventListener('click',(event)=>{
        event.stopPropagation()
        tasks = tasks.filter(t => t.id !== task.id)
        saveContent()
        list_item.remove()
      })
      
      todoList.appendChild(list_item)
    }
  }

})
