// Components
const root = document.documentElement;
const toggle =  document.getElementById("theme-toggle");

const toggleThemeClasses = [
    "switch__circle--dark",
    "switch__circle--light",
    "switch__circle--violet"
]

const setThemeInDom = (toggleTheme, rootTheme) => {
    let initialToggleTheme =  Object.values(toggleThemeClasses).find(theme => toggle.classList.contains(theme));
    toggle.classList.add(toggleTheme);
    root.classList = rootTheme;

    if(initialToggleTheme){
        toggle.classList.remove(initialToggleTheme);
    }

}

const themes = {
    dark: () => {
        setThemeInDom("switch__circle--dark", "dark-theme")
    },
    light: () => {
        setThemeInDom("switch__circle--light", "light-theme")
    },
    violet: () => {
        setThemeInDom("switch__circle--violet", "violet-theme")
    }
};

// init theme
(() => {
    let theme = localStorage.getItem("theme");

    if(theme){
        themes[theme]();
    }else{
        setThemeInDom(theme["dark"])();
    }
})();

// Toggle event
toggle.addEventListener( "click" , () => {
    let theme = localStorage.getItem("theme");

    if(theme){
        let indexInitialTheme = Object.keys(themes).indexOf(theme) 
        let actualTheme = (Object.keys(themes)[indexInitialTheme + 1]) ? (Object.keys(themes)[indexInitialTheme + 1]) : Object.keys(themes)[0];
        themes[actualTheme]();
        localStorage.setItem("theme", actualTheme);
    }else{
        themes["dark"]();
        localStorage.setItem("theme", "dark");
    }
})