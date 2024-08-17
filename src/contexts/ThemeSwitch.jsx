import { createContext, useContext, useState } from "react";

export const ThemeSwitchContext = createContext();

export const getThemeContext = () => {
    const mode = useContext(ThemeSwitchContext);
    return mode;
}

export const ThemeSwitchProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    return (
        <ThemeSwitchContext.Provider value={{ themeMode, setThemeMode }}>
            {children}
        </ThemeSwitchContext.Provider>
    )
}