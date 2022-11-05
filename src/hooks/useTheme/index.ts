import {useState, useEffect} from "react";
import StoreHelper from "../../helper/store-helper";
import { IThemeType } from "../../theme.styled";
import * as AllThemes from "../../theme.styled";


const useTheme = () => {
    const themes = StoreHelper.getFromLS("all-themes");
    const [theme, setTheme] = useState(themes.Classic);

    const setMode = (mode:IThemeType) => {
        StoreHelper.setToLS("theme",mode);
        setTheme(mode);
    }

    useEffect(() => {
        const localTheme = StoreHelper.getFromLS("theme");
        localTheme ? setTheme(localTheme) : setTheme(themes.Classic);
    }, []);

    return {theme, setMode}
};

export default useTheme;