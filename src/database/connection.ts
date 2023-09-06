import mysql from 'mysql2/promise';
import 'dotenv/config';
import { executeQueries, readQueries } from './queryUtils';

const connection = mysql.createPool({
    host: process.env.MYSQLUSER,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: Number(process.env.MYSQLPORT || 3306),
});

if (['dev', 'development'].includes(process.env.NODE_ENV || 'development')) {
    const dropQuery = readQueries('dropDatabase.sql');
    executeQueries(connection, dropQuery).then(() =>
        executeQueries(connection)
    );
}

export default connection;