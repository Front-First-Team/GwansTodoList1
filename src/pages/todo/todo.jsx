
import React, { useState } from "react";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../libs/styles/common";
import TDButton from "../../components/Button";
import AddTodoModal from "./_components/addtodoModal";
import TodoList from "./_components/todoList";

const Todo = function () {

    const [isOpenAddTodoModal, setisOpenAddTodoModal] = useState(false);

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "example-1",
            content: "example-1",
            state: true
        },
        {
            id: 2,
            title: "example-2",
            content: "example-2",
            state: false
        }
    ]);


    return <>
        {isOpenAddTodoModal && <AddTodoModal setisOpenAddTodoModal={setisOpenAddTodoModal} todos={todos} setTodos={setTodos} />}
        <S.Wrapper>
            <S.Container>
                <S.Title>TODOLIST</S.Title>
                <TodoList todos={todos} setTodos={setTodos} />
                <TDButton size={'full'} variant={'primary'} onClick={() => setisOpenAddTodoModal(true)}>
                    추가
                </TDButton>
            </S.Container>
        </S.Wrapper>
    </>
}
export default Todo

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: '#60c38c';
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const S = {
    Wrapper,
    Container,
    Title
}