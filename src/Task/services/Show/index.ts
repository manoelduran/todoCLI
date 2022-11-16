
import { listTasks } from "../List";


const showTask = ( title: string) => {
    console.log('title', title)
    const tasks =  listTasks();
    console.log('tasks', tasks)
    const selectedTask = tasks.find(task => task.title === title);
    if (selectedTask.length === 0) {
        console.log('We can not found a task with this title');
    }
    console.log(`Your Task is: ${title}`);
    return selectedTask;
};

export { showTask };