import { env } from '$env/dynamic/private'
import mssql from `mssql`

const config = {
    user: env.MYSQL_NAME, // better stored in an app setting such as process.env.DB_USER
    password: env.MYSQL_PASSWORD, // better stored in an app setting such as process.env.DB_PASSWORD
    server: env.MYSQL_SERVER, // better stored in an app setting such as process.env.DB_SERVER
    port: parseInt(env.MYSQL_PORT), // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: env.MYSQL_DATABASE, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
};

// connect to DB and creat asseible pool
let poolPromise;
export async function InitDb(){
    if(poolPromise == undefined){
        poolPromise = new mssql.ConnectionPool(config)
            .connect()
            .then(pool => {
                return pool;
            })
            .catch(err => {
                console.error('Database Connection Failed!', err);
                throw err;
            });
    }

    return poolPromise;
}