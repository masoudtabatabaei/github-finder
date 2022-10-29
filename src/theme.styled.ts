import styled from "styled-components";

export interface ThemeType {
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
            }
        },
        searchContainer: string;
        userItem: {
            color: string;
            background: {
                _: string;
                _hover: string;
            };
        }
    }
}

export const Classic:ThemeType = {
    name: "classic-theme",
    colors : {
        body: "rgba(135, 234, 135, 0.3)",
        navbar: {
            color: "#ffffff",
            background: "#333333",
        },
        table: {
            border: "1px solid #ddd",
            th: {
                background: "#363636"
            },
        },
        searchContainer: "#b6b6b6",
        userItem: {
            color: "#fff",
            background: {
                _: "#aaa",
                _hover: "#545454"
            },
        }
    }
}

export const Thinted:ThemeType = {
    name: "thinted-theme",
    colors : {
        body: "#fff",
        navbar: {
            color: "#ffffff",
            background: "#333333",
        },
        table: {
            border: "1px solid #ddd",
            th: {
                background: "#333"
            },
        },
        searchContainer: "#f2f2f2",
        userItem: {
            color: "#fff",
            background: {
                _: "#aaa",
                _hover: "#999"
            },
        }
    }
}

// export const Dark:ThemeType = {
//     name: "dark-theme",
//     colors: {
//         navbar: {
//             color: "#ffffff",
//             background: "#333333",
//         }
//     }
// }