function IsDarkMode(window: Window):boolean{
    console.log("Init")
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}