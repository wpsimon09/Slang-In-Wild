import { env } from "$env/dynamic/private";
import { InitDb, poolPromise } from "$lib/db"
import type { ISlangProject } from "$lib/EntryData";
import { parseProject } from "$lib/EntryData";
import type { Actions } from "@sveltejs/kit";

//=============================
// load initial data 
export async function load() {
  
  const conn = await InitDb();

  const result = await conn.request().query('SELECT * FROM SlangProjects');

  const rows = result.recordset;

  // parse the result
  const projects: ISlangProject[] = rows.map(parseProject);

  console.log(projects)

  return {
    projects
  };
}

export const actions = {
  //============================================
  // handle submition of the new slang project
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);

    const email = formData.get("email")?.toString() || '';;
    const projectName = formData.get("project-name")?.toString() || '';
    const authorName = formData.get("author-name")?.toString() || '';
    const description = formData.get("description")?.toString() || '';
    const ghLink = formData.get("gh-link")?.toString() || '';
    const tags = formData.get("tags")?.toString() || '';

    try {
      const pool = await InitDb();
      await pool.request()
        .input('ProjectName', projectName)
        .input('Description', description)
        .input('Author', authorName)
        .input('Tags', tags)
        .input('ContactEmail', email)
        .input('ghLink', ghLink)
        .query(`
			INSERT INTO PotentialSlagnProjects (
				ProjectName, Description, Author, Tags, ContactEmail, SubmittedDate, ghLink
			) VALUES (
				@ProjectName, @Description, @Author, @Tags, @ContactEmail, GETDATE(), @ghLink
			)
		`);

      console.log("submitted entry",)
      return { success: true };
    } catch (error) {
      console.error('Insert failed:', error);
      return { success: false, error: 'Database insert failed' };
    }
  }
} satisfies Actions;

