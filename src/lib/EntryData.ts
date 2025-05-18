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
