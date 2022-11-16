import fs from 'fs';

const listTasks = (): any => {
    try {
        const list = fs.readFileSync('tasks-data.json');
        const parsed = JSON.parse(String(list))
        console.log('list', parsed)
        return parsed;
    } catch (e) {
        return [];
    }
};

export { listTasks };