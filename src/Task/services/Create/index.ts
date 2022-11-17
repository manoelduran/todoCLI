import fs from 'fs';
import { Task } from '../../entities/Task';
import { listTasks } from "../List";

const CreateTask = (title: string): Task => {
    console.log('title', title)
    const allTasks: Task[] = listTasks();
    const newTask = new Task(title);
    const taskAlreadyExists = allTasks.filter((task: Task) => task.title === newTask.title)
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