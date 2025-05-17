export enum ETag{
    Vulkan = "Vulkan",
    OpenGL = "OpenGL",
    MachineLearning = "ML",
    DirectX = "DirectX",
    RTX = "RTX",
    GasuianSplatting = "Gausian"    
}


export interface ISlangProject{
    name: string,
    description: string,
    ghLink: string, 
    contactEmail: string,
    tags: ETag[]

}

export function createEmptySlangProject(): ISlangProject {
    return {
        name: "",
        description: "",
        ghLink: "",
        contactEmail: "",
        tags: []
    };
}
