import fs from 'fs';
import { Task } from '../../entities/Task';

const listTasks = (): Task[] => {
    try {
        const list = fs.readFileSync('tasks-data.json');
        const parsed: Task[] = JSON.parse(String(list));
        console.log('list', parsed)
        return parsed;
    } catch (e) {
        console.log('You need createTask first than list!')
        return [] as Task[];
    }
};

export { listTasks };