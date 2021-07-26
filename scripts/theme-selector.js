// Components
const root = document.documentElement;
const toggle =  document.getElementById("theme-toggle");

const toggleThemeClasses = {
    dark: "switch__circle--dark",
    light: "switch__circle--light",
    violet: "switch__circle--violet"
}

const setThemeInDom = (theme, cssToggleClass) => {
    let initialToggleTheme =  Object.values(toggleThemeClasses).find(theme => toggle.classList.contains(theme));
    toggle.classList.add(cssToggleClass);
    root.classList = theme;

    if(initialToggleTheme){
        toggle.classList.remove(initialToggleTheme);
    }

}

const themes = {
    dark: () => {
        setThemeInDom("dark-theme", "switch__circle--dark");
    },
    light: () => {
        setThemeInDom("light-theme",  "switch__circle--light");
    },
    violet: () => {
        setThemeInDom("violet-theme", "switch__circle--violet");
    }
};

// init theme
(() => {
    let theme = localStorage.getItem("theme");

    if(theme){
        themes[theme]();
    }else{
        themes["dark"]();
        localStorage.setItem("theme","dark");
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