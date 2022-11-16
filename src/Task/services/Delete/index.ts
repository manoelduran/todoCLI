import { listTasks } from "../List";
import fs from 'fs';


const deleteTask =  (title: any) => {
    const list = listTasks();
    const removedTask = list.filter(task => task.title !== title);
    fs.writeFileSync('tasks-data.json', JSON.stringify(removedTask))
    if (removedTask.length === 0) {
        console.log('Task can not found');
    }
    fs.writeFileSync('tasks-data.json', JSON.stringify(removedTask));
    console.log('Task was deleted');
};

export { deleteTask };