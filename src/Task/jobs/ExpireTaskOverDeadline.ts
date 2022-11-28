import { addDays } from 'date-fns';
import cron from 'node-cron';
import { Task } from '../entities/Task';
import { listTasks } from '../services/List';

class ExpireTaskOverDeadline {
    public async execute(): Promise<void> {
        cron.schedule('1 0 * * *',
            async () => {
                const activeTasks = listTasks();
                const expiredTasks = [] as Task[];
                await Promise.all(
                    activeTasks.map(async task => {
                        if (ExpireTaskOverDeadline.validTaskExpiration(task)) {
                            expiredTasks.push(task);
                        }
                    })
                )
            },
            {
                scheduled: true,
                timezone: 'Etc/UTC',
            },
        )
    }
    private static validTaskExpiration(task: Task): boolean {
        if (!task) {
            return false;
        }
        const now = new Date();
        const expirationDate = addDays(task?.created_at, task.days_to_expire);
        if (now > expirationDate) {
            return true;
        }
    }
}

export { ExpireTaskOverDeadline }