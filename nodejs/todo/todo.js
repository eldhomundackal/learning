
const fs = require("fs");
const filePath = './nodejs/todo/todo_data.json';
const command = process.argv[2]
const argument = process.argv[3]

const loadTask = () => {
  try {
    fileBuffer = fs.readFileSync(filePath)
    dataJson = fileBuffer.toString()
    return JSON.parse(dataJson)
  } catch (error) {
    return []
  }

}

const addTask = (task) => {
  const tasks = loadTask()
  tasks.push({ task })
  saveTask(tasks)
  console.log(`Task added successfully : ${task}`);

}

const saveTask = (tasks) => {

  const taskString = JSON.stringify(tasks)
  fs.writeFileSync(filePath, taskString)

}

const listTask = () => {
  const tasks = loadTask()
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`))

}

const removeTask = (argument) => {
  taskId = parseInt(argument)
  let tasks = loadTask()
  for (let index = 0; index < tasks.length; index++) {

    if (taskId - 1 === index) {
      const removedTask = tasks[index].task
      tasks.splice(index, 1);
      saveTask(tasks);
      console.log(`Task sucessfully removed: ${removedTask}`);
      listTask()
      break;
    }
  }
}


if (command === "add") {
  addTask(argument)
}
else if (command === "list") {
  listTask()
}
else if (command === "remove") {
  removeTask(argument)
}
else{
  console.log("Command not found");
  
}
