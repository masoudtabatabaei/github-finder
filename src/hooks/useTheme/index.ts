import {useState, useEffect} from "react";
import StoreHelper from "@utils/store-helper";
import { IThemeType } from "../../theme.styled";


const useTheme = () => {
    const themes = StoreHelper.getFromLS("all-themes");
    const [theme, setTheme] = useState<any>();
    const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

    const setMode = (mode:IThemeType) => {
        StoreHelper.setToLS("theme",mode);
        setTheme(mode);
    }

    useEffect(() => {
        const localTheme = StoreHelper.getFromLS("theme");
        localTheme ? setTheme(localTheme) : setTheme(themes.Classic);
        setThemeLoaded(true);
    }, []);

    return {theme, themeLoaded, setMode}
};

export default useTheme;