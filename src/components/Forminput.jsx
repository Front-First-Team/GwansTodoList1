
import React from "react"
import styled, { css } from "styled-components"

const FormInput = ({ label, size, containerStyle, ...props }) => {
    return <S.InputBox >
        <S.InputLabel>{label}</S.InputLabel>
        <S.Input size={size} {...props} />
    </S.InputBox>
}
export default FormInput

const sizeCss = {
    1: css`
    width: 100px;
    height: 30px;
    `,
    2: css`
    width: 300px;
    height: 48px;
    `,
    3: css`
    width: 100%;
    height: 48px;
    `
}

const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`
const Input = styled.input`
border: 1px solid #999;
border-radius: 4px;
padding-left: 16px;

${(props) => sizeCss[props.size]}

&::placeholder{
    text-align: center;
}
`
const InputLabel = styled.label`
    position: absolute;
    left: 16px;
    top: -6px;
    font-size: 12px;
    background-color: aliceblue;
    z-index: 100;
    padding: 0 4px;
`
const S = {
    InputBox,
    InputLabel,
    Input,

}



