import { Button, Input } from "../components/common";
import { useState, useRef } from "react";
import styled from "styled-components";
import { List } from "../components/List";

export function ToDoList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [listData, setListData] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const initInput = () => {
    setInputValue("");
  };

  const addClickHandler = () => {
    if (inputValue === "") return;
    setListData((prev) => [...prev, inputValue]);
    initInput();
    console.log(inputRef.current?.focus());
  };

  const deleteClickHandler = (index: number) => {
    const newList = listData.filter((_, i) => i !== index);
    setListData(newList);
  };

  return (
    <Wrapper>
      <Title>Todo List</Title>
      <ToDoListWrapper>
        <InputWrapper>
          <Input
            ref={inputRef}
            value={inputValue}
            onChangeHandler={onChangeHandler}
          />
          <Button text="Add" onClickHandler={addClickHandler} />
        </InputWrapper>

        <Ul>
          {listData.map((list, i) => (
            <List
              text={list}
              index={i}
              onClickHandler={deleteClickHandler}
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
