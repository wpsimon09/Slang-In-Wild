export enum ETag{
    Vulkan = "Vulkan",
    OpenGL = "OpenGL",
    MachineLearning = "ML",
    DirectX = "DirectX",
    RTX = "RayTracing",
    GasuianSplatting = "Gausian"    
}


export interface ISlangProject{
    name: string,
    description: string,
    ghLink: string, 
    contactEmai: string,
    tags: ETag[]

}

export function createEmptySlangProject(): ISlangProject {
    return {
        name: "",
        description: "",
        ghLink: "",
        contactEmai: "",
        tags: []
    };
}
