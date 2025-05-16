import { MYSQL_DATABASE, MYSQL_NAME, MYSQL_PASSWORD, MYSQL_SERVER } from '$env/static/private'
import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: MYSQL_SERVER, 
    user: MYSQL_NAME, 
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit : 10, 
    queueLimit: 0
})

export const connectionToDB = async() => pool.getConnection();