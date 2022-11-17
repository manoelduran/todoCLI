
import { listTasks } from "../List";


const showTask = ( title: string) => {
    const tasks =  listTasks();
    const selectedTask = tasks.find(task => task.title === title);
    if (!selectedTask) {
        console.log('We can not found a task with this title');
    }
    console.log(`Your Task is: ${selectedTask.title}`);
};

export { showTask };