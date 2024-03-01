import { Button, Input } from "../components/common";
import { useRef } from "react";
import styled from "styled-components";
import { List } from "../components/List";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { addTodo, deleteTodo, changeInput } from "../store/actions";

export function ToDoList() {
  const lists = useSelector((state: RootState) => state.todoList.lists);
  const inputData = useSelector((state: RootState) => state.todoList.inputData);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickAdd = () => {
    dispatch(addTodo(inputData));
    inputRef.current?.focus();
  };

  const onDeleteAdd = (i: number) => {
    dispatch(deleteTodo(i));
    inputRef.current?.focus();
  };

  return (
    <Wrapper>
      <Title>Todo List</Title>
      <ToDoListWrapper>
        <InputWrapper>
          <Input
            ref={inputRef}
            value={inputData}
            onChangeHandler={(e) => dispatch(changeInput(e.target.value))}
          />
          <Button text="Add" onClickHandler={onClickAdd} />
        </InputWrapper>

        <Ul>
          {lists.map((list, i) => (
            <List
              text={list}
              index={i}
              onClickHandler={() => onDeleteAdd(i)}
              key={i}
            />
          ))}
        </Ul>
      </ToDoListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  gap: 5px;
  background-color: darkgrey;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ToDoListWrapper = styled.main`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  width: 400px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 10px;
  border: 1px solid;
  border: ${({ theme }) => theme.borderColor};
`;

const InputWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 20px;
  align-items: center;
`;

const Ul = styled.ul`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
