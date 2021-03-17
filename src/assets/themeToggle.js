import { createContext } from "react"

const theme = {
    light: {
        background: 'white',
        topBarBackground: "pink.400",
        textColor: "#666",
        mainBorderColor: "gray.300",
        topBarCompanyColor: '#333',
        hoverBgColor: '#ccc',
        boxShadow: '0 0 5px #666',
        menuTextBorder: 'gray.200',
        menuTextColor: "gray.600",
        tableHeadColor: "gray.700",
        button: {
            color: "gray.600",
            bg: "gray.100",
            hoverBg: "gray.50",
            activeBg: "gray.200"
        },
        overlay: {
            bg:{
                first: "gray.100",
                second:"white"
            },
            colors: {
                primary: "#666",
                secondary: "#333"
            }
        }
    },
    dark: {
        background: 'gray.900',
        topBarBackground: "pink.800",
        textColor: '#999',
        mainBorderColor: "gray.700",
        topBarCompanyColor: '#eee',
        hoverBgColor: '#666',
        boxShadow: '0 0 5px #ccc',
        menuTextBorder: 'gray.700',
        menuTextColor: "gray.300",
        tableHeadColor: 'white',
        button: {
            color: "gray.200",
            bg: "gray.600",
            hoverBg: "gray.700",
            activeBg: "gray.500"
        },
        overlay: {
            bg:{
                first: "gray.700",
                second:"gray.600"
            },
            colors: {
                primary: "#ddd",
                secondary: "#aaa"
            }
        },
    }
}

const ThemedContext = createContext(theme.light)

export { ThemedContext, theme }