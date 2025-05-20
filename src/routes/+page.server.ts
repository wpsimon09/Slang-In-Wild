import { env } from "$env/dynamic/private";
import { poolPromise } from "$lib/db"
import type { ISlangProject } from "$lib/EntryData";
import { parseProject } from "$lib/EntryData";

export async function load() {
    const conn = await poolPromise;

    const result = await conn.request().query('SELECT * FROM SlangProjects');

    const rows = result.recordset;

    const projects: ISlangProject[] = rows.map(parseProject);

    console.log(projects)

    return {
        projects
    };
}

