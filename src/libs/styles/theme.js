
//디자인 토큰

const COLORS = {
    primary: '#00C7AE',

    text: {
        black: "#111111",
        white: '#ffffff'
    },

    Gray: {
        1: "#e9e9e9",
        2: "#d9d9d9",
        3: "#656565",
    }
}

const FONT_SIZE = {
    small: "14px",
    medium: "18px",
    large: "20px"
}

//theme으로 객체화 시켜서 export하는것은 styled-component의
// themeprovider를 사용하면 매번 import하지 않아도 자동으로 값이 전달된다
export const theme = {
    colors: COLORS,
    fontsize: FONT_SIZE
}