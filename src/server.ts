import _ from 'lodash';

import yargs from 'yargs';
import { completeTask } from './Task/services/Complete';
import { CreateTask } from './Task/services/Create';
import { deleteTask } from './Task/services/Delete';
import { listTasks } from './Task/services/List';
import { Options } from './Task/services/Options';
import { showTask } from './Task/services/Show';
import { addSeconds } from 'date-fns';
import { expire } from './Task/jobs/ExpireTaskOverDeadlineJob';

const argv = yargs.argv as unknown as {
    [x: string]: unknown;
    _: (string | number)[];
    $0: string;
};
let command = argv._[0];
console.log('Server is Running!');
console.log('Running Command is :', command);
switch (command) {
    case 'createTask': {
        CreateTask(argv.title as string);
        break;
    };
    case 'deleteTask': {
        deleteTask(argv.title as string);
        break;
    };
    case 'listTask': {
        listTasks();
        break;
    };
    case 'showTask': {
        showTask(argv.title as string)
        break;
    };
    case 'completeTask': {
        completeTask(argv.title as string)
        break;
    }
    default: {
        Options();
    }
    setTimeout(() => {
        expire()
    }, 0)
};