import { Task } from "../../entities/Task";
import { listTasks } from "../List";
import fs from 'fs';


const completeTask = (title: string) => {
    const tasks: Task[] = listTasks();
    const completedTasks: Task[] = [];
    const selectedTask = tasks.find((task: Task) => task.title === title);
    if (selectedTask) {
        completedTasks.push(selectedTask);
        const removedFromTasks = tasks.filter((task: Task) => task.title !== title);
        fs.writeFileSync('tasks-data.json', JSON.stringify(removedFromTasks));
        fs.writeFileSync('completedTasks-data.json', JSON.stringify(completedTasks));
    }
};

export { completeTask };