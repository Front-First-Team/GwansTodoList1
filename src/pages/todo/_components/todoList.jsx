
import styled from "styled-components"
import OneTodo from "./oneTodo"

const TodoList = ({ todos, setTodos }) => {
    const deleteTodo = (todoId) => {
        const filterTodo = todos.filter((todo) => todo.id !== todoId);
        setTodos(filterTodo);
    };

    const updateTodo = ({ todoId, content }) => {
        const temp_todos = [...todos];
        let selectTodoIndex = temp_todos.findIndex((todo) => todo.id === todoId);
        temp_todos[selectTodoIndex] = {
            ...temp_todos[selectTodoIndex],
            content,
        };


        setTodos(temp_todos);
    };

    return (
        <S.Wrapper>
            {todos.map((todo) => (
                <OneTodo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </S.Wrapper>
    )
}

export default TodoList

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const S = {
    Wrapper
}