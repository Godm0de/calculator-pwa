// Themes
const themes = {
    "dark": document.getElementById("dark"),
    "light": document.getElementById("light"),
    "violet": document.getElementById("violet")
}

document.getElementById("dark").addEventListener("click", ()=> {
    document.documentElement.classList = "dark-theme";
})

document.getElementById("light").addEventListener("click", ()=> {
    document.documentElement.classList = "light-theme";
})

document.getElementById("violet").addEventListener("click", ()=> {
    document.documentElement.classList = "violet-theme";
})