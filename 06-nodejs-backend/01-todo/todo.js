const fs = require('fs');
const path = './tasks.json';

const command = process.argv[2];
const task = process.argv[3];

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(path);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(path, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log(`Task added: ${task}`)
}

const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => {
        console.log(`${index + 1} : ${task.task}`);
    });
}

const removeTask = (index) => {
    const tasks = loadTasks();
    if(index > 0 && index <= tasks.length){
        const removedTask = tasks.splice(index -1, 1);
        saveTasks(tasks);
        console.log(removedTask)
        console.log(`Task removed: ${removedTask[0].task}`)
    } else {
        console.log("Invalid task number. Please provide a valid index.")
    }
}

if(command === 'add'){
    addTask(task);
} else if(command === 'list'){
    listTasks();
} else if(command === 'delete'){
    removeTask(parseInt(task))
} else {
    console.log('Invalid command. Use "add", "list", or "delete".');
}