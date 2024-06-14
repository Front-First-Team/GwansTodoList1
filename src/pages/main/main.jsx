import styled from "styled-components"
import SignInForm from "./_components/Signin-Form"
import SignUpForm from "./_components/Signup-Form"
import { useState } from "react"

const Main = () => {
    const [formState, setFormState] = useState("SIGN-IN")

    const TAB_ARRAY = [
        {
            name: "SIGN-IN",

        },
        {
            name: "SIGN-UP",

        }
    ]

    const handlePressSignTab = (tabName) => {
        setFormState(tabName);
        console.log(formState)
    }

    return <S.Wrapper>
        <S.Container>
            <S.Header>
                {TAB_ARRAY.map((tab, index) => <S.Tab
                    key={index}
                    $isSelected={formState === tab.name}
                    onClick={() => handlePressSignTab(tab.name)}>
                    {tab.name}
                </S.Tab>)}
            </S.Header>
            {
                formState === 'SIGN-IN' ? <SignInForm /> : <SignUpForm setFormState={setFormState}
                />
            }
        </S.Container>

    </S.Wrapper >
}
export default Main

const Wrapper = styled.div`
height: calc(100vh - 140px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Container = styled.div`
    width: 360px;
    border : 1px solid #999;
    border-radius: 3px;
`

const Header = styled.header`
    background-color: #11dcc1;
    display: flex;
    border-radius: 2px;
`
const Tab = styled.div`
    font-size: 32px;
    padding: 16px;
    font-weight: bold;
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #e3f0fa;
    }
    ${(props) => props.$isSelected && 'backgroundColor: #e0e0e0'}
   
`

const S = {
    Wrapper,
    Container,
    Header,
    Tab
}