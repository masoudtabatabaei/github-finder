export interface IThemeType {
    name:string;
    colors: {
        body: string;
        navbar: {
            color: string;
            background: string;
        },
        table: {
            border: string;
            th: {
                background: string;
            },
            tr: {
                even: string;
            }
        },
        searchContainer: string;
        searchButton: {
            color: string;
            background: string;
        },
        viewToggle: {
           color: {
            _: string;
            _active: string;
           }
        }
        userItem: {
            color: string;
            background: {
                _: string;
                _hover: string;
            };
        },
        about: string;
    }
}