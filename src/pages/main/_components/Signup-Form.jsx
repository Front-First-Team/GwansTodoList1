
import React from "react"
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"
import styled from "styled-components"

const SIGNFORM_ARRAY = [
    {
        label: "이메일",
        size: 3,
        name: 'email',
        option: {
            placeholder: "이메일을 입력해주세요"
        }
    },
    {
        label: "비밀번호",
        size: 3,
        option: {
            placeholder: "비밀번호를 입력해주세요 "
        }
    },
    {
        label: "비밀번호 확인",
        size: 3,
        option: {
            placeholder: "비밀번호를 확인해주세요"
        }
    },
]

const SignUpForm = ({ setFormState }) => {
    const onsubmitSignup = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        alert(`${email}님 환영합니다`)
        // formstate = "SIGN-IN"
        setFormState("SIGN-IN")
    }

    return <S.Form onSubmit={onsubmitSignup}>
        {SIGNFORM_ARRAY.map((form) =>
            <FormInput key={form.name} size={form.size} label={form.label} name={form.name} placeholder={form.option?.placeholder} />
        )}

        <TDButton variant={'primary'} size={'full'}>
            회원가입
        </TDButton>
    </S.Form>
}
export default SignUpForm

const Form = styled.form`
background-color: '#fff';
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px;
`

const S = {
    Form,
}
