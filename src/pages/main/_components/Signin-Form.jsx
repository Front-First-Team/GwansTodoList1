
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"
import Form from "./style"
import React from "react"
import { useNavigate } from 'react-router-dom'





const SignInForm = () => {

    const navigate = useNavigate()

    const handlepressSignin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if (!email.trim() || !password.trim()) return;
        if (email === "test" && password === "test") {
            return navigate("/todo/3")
        }
        alert("아이디와 비밀번호를 확인해주세요")

    }
    return <S.Form onSubmit={handlepressSignin}>
        <FormInput label={"이메일"} placeholder={"이메일을 입력하세요"} size={3} name="email" />
        <FormInput label={"비밀번호"} placeholder={"비밀번호를 입력하세요"} size={3} name="password" />
        <TDButton variant={'primary'} size={'full'}>
            로그인
        </TDButton>
    </S.Form>
}
const S = {
    Form,
}
export default SignInForm



