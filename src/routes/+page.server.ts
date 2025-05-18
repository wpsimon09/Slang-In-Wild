import{MYSQL_DATABASE} from "$env/static/private"

import { connectionToDB } from "$lib/db"
import type { ISlangProject } from "$lib/EntryData";


export async function load() {
    const conn = await connectionToDB();
    const [rows] = await conn.query('SELECT * FROM ' + MYSQL_DATABASE);
    
    conn.release(); 


    const projects = (rows as ISlangProject[]).map((row: any) => ({
        ...row,
        tags: typeof row.tags === 'string'
            ? row.tags.split(',').map((tag: string) => tag.trim())
            : []
    }));


    return {
        projects
    };
}

