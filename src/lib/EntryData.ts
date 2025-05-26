export enum ETag{
    Vulkan = "Vulkan",
    OpenGL = "OpenGL",
    MachineLearning = "ML",
    DirectX = "DirectX",
    RTX = "RTX",
    GasuianSplatting = "Splatting",
    Scientific = "Scientific",
    Games = "Games",
    GameEngine = "Game Engine",
    SlangPy = "SlangPy",
    Cuda = "Cuda",
    Optix = "OptiX",
    WgSL = "WgSL"
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
        ghLink: project.ghLink, 
        contactEmail: '', 
        authorName: project.Author,
        tags: typeof project.Tags === 'string'
            ? project.Tags.split(',').map((tag: string) => tag.trim())
            : []
    };
}
