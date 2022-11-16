import fs from 'fs';
import { listTasks } from "../List";

const CreateTask =  (title: any ) => {
    console.log('title', title)
    const allTasks =  listTasks();
    const newTask = {title: title}
    const taskAlreadyExists = allTasks.filter(task => task.title === newTask.title)
    console.log('taskAlreadyExists', taskAlreadyExists)
    console.log('allTasks', allTasks)
    if (taskAlreadyExists.length === 0) {
        allTasks.push(newTask);
        fs.writeFileSync('tasks-data.json', JSON.stringify(allTasks))
        console.log('Task created!');
        return
    };
    console.log('Task already exists!', taskAlreadyExists);
};

export { CreateTask };