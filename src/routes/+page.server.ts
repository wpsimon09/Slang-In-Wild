import{MYSQL_SERVER,
MYSQL_DATABASE,
MYSQL_NAME,
MYSQL_PASSWORD} from "$env/static/private"

import { connectionToDB } from "$lib/db"
import type { ISlangProject } from "$lib/EntryData";


export async function load() {
    const conn = await connectionToDB();
    const [rows] = await conn.query('SELECT * FROM ' + MYSQL_DATABASE);

    loadedProjets:Array<ISlangProject>

    conn.release(); // release the connection back to the pool

    return {
        projects: rows
    };
}