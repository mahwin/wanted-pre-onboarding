import styled from "styled-components";
import { Button } from "../common/Button";

interface Porps {
  text: string;
  index: number;
  onClickHandler: (index: number) => void;
}

export function List({ text, onClickHandler, index }: Porps) {
  return (
    <StyleLi>
      <span>{text}</span>
      <Button text="Delete" onClickHandler={() => onClickHandler(index)} />
    </StyleLi>
  );
}

const StyleLi = styled.li`
  padding: 10px 20px;
  text-align: left;
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
