const themeToggle = document.getElementById("theme-toggle");
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

// Toggle theme css list
const toggleThemeClasses = {
    dark: "switch__circle--dark",
    light: "switch__circle--light",
    violet: "switch__circle--violet"
}

// Root element css list
const rootThemeClasses = {
    dark: "dark-theme",
    light: "light-theme",
    violet: "violet-theme"
}

const themes = Object.keys(rootThemeClasses);
 
const getActualTheme = (theme = "dark") => {
    const actualThemeIndex = themes.indexOf(theme);
    return themes[actualThemeIndex + 1] ? themes[actualThemeIndex + 1] : themes[0];
}

const changeActualTheme = (theme) => {
    const initialToggleTheme =  Object.values(toggleThemeClasses).find(theme => themeToggle.classList.contains(theme));
    themeToggle.classList.add(toggleThemeClasses[getActualTheme(theme)]);
    themeToggle.classList.remove(initialToggleTheme);
    document.documentElement.classList = rootThemeClasses[getActualTheme(theme)];
}

const onInit = () =>{
    if(localStorage.getItem("theme")){
        themeToggle.classList.add(toggleThemeClasses[localStorage.getItem("theme")]);
        document.documentElement.classList = rootThemeClasses[localStorage.getItem("theme")];
    }else if(userPrefersLight) {
        localStorage.setItem("theme", "light");
        changeActualTheme();
    }else{
        localStorage.setItem("theme", "dark");
    }
}

// OnInit()

onInit();

// Events
themeToggle.addEventListener( "click" , () => {
    changeActualTheme(localStorage.getItem("theme"));
    localStorage.setItem("theme", getActualTheme(localStorage.getItem("theme")));
})