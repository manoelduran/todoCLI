import { addDays, parseISO } from 'date-fns';
import cron from 'node-cron';
import fs from 'fs';
import { Task } from '../entities/Task';
import { listTasks } from '../services/List';

const expire = () => {
    cron.schedule('* * * * *',
        () => {
            console.log('Rodando cronjobs')
            const tasks: Task[] = listTasks();
            const expiredTasks = [] as Task[];
            const now = new Date();
            console.log('active', tasks)
            tasks.map((task: Task) => {
                console.log('task', task)
                const expirationDate = addDays(parseISO(String(task?.created_at)), task.days_to_expire);
                console.log('now', now)
                console.log('expirada', expirationDate)
                if (now > expirationDate) {
                    expiredTasks.push(task);
                    fs.writeFileSync('expiredTasks-data.json', JSON.stringify(expiredTasks))
                    const removedFromTasks = tasks.filter((task: Task) => task.title , task.title);
                    fs.writeFileSync('tasks-data.json', JSON.stringify(removedFromTasks));
                }
            })
        },
        {
            scheduled: true,
            timezone: 'Etc/UTC',
        },
    )
}

export { expire }