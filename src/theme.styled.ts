import styled from "styled-components";

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

export const Classic:IThemeType = {
    name: "classic-theme",
    colors : {
        body: "#E4F0BA",
        navbar: {
            color: "#ffffff",
            background: "#333333",
        },
        table: {
            border: "1px solid #ccc",
            th: {
                background: "#00a676"
            },
            tr: {
                even: "#eee"
            }
        },
        searchContainer: "#00a676",
        searchButton: {
            color: "#000",
            background: "#ddd"
        },
        viewToggle: {
           color: {
            _: "#ccc",
            _active: "#0E3B43"
           }
        },
        userItem: {
            color: "#fff",
            background: {
                _: "#86c39c",
                _hover: "#4AC475"
            },
        },
        about:"#000"
    }
}

export const Thinted:IThemeType = {
    name: "thinted-theme",
    colors : {
        body: "#ddd",
        navbar: {
            color: "#ffffff",
            background: "#333",
        },
        table: {
            border: "1px solid #aaa",
            th: {
                background: "#555"
            },
            tr: {
                even: "#50C3E6"
            }
        },
        searchContainer: "#aaa",
        searchButton: {
            color: "#fff",
            background: "#2d6bb3"
        },
        viewToggle: {
            color: {
             _: "#ddd",
             _active: "#0E3B43"
            }
         },
        userItem: {
            color: "#fff",
            background: {
                _: "#50C3E6",
                _hover: "#0A4253"
            },
        },
        about:"#333"
    }
}


export const Dark:IThemeType = {
    name: "dark-theme",
    colors : {
        body: "#666",
        navbar: {
            color: "#333",
            background: "#aaa",
        },
        table: {
            border: "1px solid #ddd",
            th: {
                background: "#222"
            },
            tr: {
                even: "#aaa"
            }
        },
        searchContainer: "#b2b2b2",
        searchButton: {
            color: "#eee",
            background: "#555"
        },
        viewToggle: {
            color: {
             _: "#ddd",
             _active: "#0E3B43"
            }
         },
        userItem: {
            color: "#fff",
            background: {
                _: "#525252",
                _hover: "#323232"
            },
        },
        about:"#eee"
    }
}