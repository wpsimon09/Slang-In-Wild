import { connectionToDB } from "$lib/db";

export async function POST({request}){
    const reqdata = await request.json();

    const NewSlangProject = reqdata.NewSlangProject;
    
    if (!NewSlangProject) {
        return new Response(
            JSON.stringify({ error: "Invalid request data" }),
            { status: 400 }
        );
    }

    // Convert tags array to comma-separated string
    const conn = await connectionToDB();
    const tagsString = Array.isArray(NewSlangProject.tags)
        ? NewSlangProject.tags.join(',')
        : '';

    console.log("submit databae with ", NewSlangProject);

    // Insert into the database
    await conn.query(
        'INSERT INTO SlangProject (name, description, ghLink, contactEmail, tags) VALUES (?, ?, ?, ?, ?)',
        [
            NewSlangProject.name,
            NewSlangProject.description,
            NewSlangProject.ghLink,
            NewSlangProject.contactEmail,
            tagsString
        ]
    );

    conn.release();


    return new Response(JSON.stringify({ success: true }), { status: 202 });
}