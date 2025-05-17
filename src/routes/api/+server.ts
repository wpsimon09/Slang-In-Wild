import { connectionToDB } from "$lib/db";

export async function POST({request}){
    const NewSlangProject = await request.json();

    const conn = await connectionToDB();

    // Convert tags array to comma-separated string
    const tagsString = Array.isArray(NewSlangProject.tags)
        ? NewSlangProject.tags.join(',')
        : '';

    // Insert into the database
    await conn.query(
        'INSERT INTO SlangProject (name, description, ghLink, contactEmail, tags) VALUES (?, ?, ?, ?, ?)',
        [
            NewSlangProject.name,
            NewSlangProject.description,
            NewSlangProject.ghLink,
            NewSlangProject.contactEmai,
            tagsString
        ]
    );

    conn.release();

    console.log("submit daatabae with ", NewSlangProject);

    return new Response(JSON.stringify({ success: true }), { status: 202 });
}