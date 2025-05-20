export enum ETag{
    Vulkan = "Vulkan",
    OpenGL = "OpenGL",
    MachineLearning = "ML",
    DirectX = "DirectX",
    RTX = "RTX",
    GasuianSplatting = "Splatting",
    Scientific = "Scientific",
    Games = "Games",
    GameEngine = "Game Engine"    
}


export interface ISlangProject{
    name: string,
    description: string,
    ghLink: string, 
    contactEmail: string,
    authorName: string,
    tags: ETag[]

}

export function createEmptySlangProject(): ISlangProject {
    return {
        name: "",
        description: "",
        ghLink: "",
        contactEmail: "",
        authorName : "",
        tags: []
    };
}

export function parseProject(project: any): ISlangProject {
    return {
        name: project.ProjectName,
        description: project.Description,
        ghLink: '', // no GitHub link in your DB, so leave blank or extend your schema
        contactEmail: '', // also missing from the DB
        authorName: project.Author,
        tags: typeof project.Tags === 'string'
            ? project.Tags.split(',').map((tag: string) => tag.trim())
            : []
    };
}
