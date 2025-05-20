import { env } from "$env/dynamic/private";
import { poolPromise } from "$lib/db"
import type { ISlangProject } from "$lib/EntryData";
import { parseProject } from "$lib/EntryData";
import type { Actions } from "@sveltejs/kit";

//=============================
// load initial data 
export async function load() {
    const conn = await poolPromise;

    const result = await conn.request().query('SELECT * FROM SlangProjects');

    const rows = result.recordset;

    // parse the result
    const projects: ISlangProject[] = rows.map(parseProject);

    console.log(projects)

    return {
        projects
    };
}

//============================================
// handle submition of the new slang project
export const actions = {
    default: async({request})=>{
        const formData = await request.formData();
        console.log(formData);
        
        const projectName = formData.get()
    }
} satisfies Actions;

