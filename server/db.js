import {createPool} from 'mysql2/promise';

export const Pool= createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1921',
    database: 'tasksdb'

});