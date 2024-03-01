import styled from "styled-components";

interface Props {
  text: string;
  onClickHandler: () => void;
}

export function Button({ text, onClickHandler }: Props) {
  return <MyButton onClick={onClickHandler}>{text}</MyButton>;
}

const MyButton = styled.button`
  height: 2rem;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  padding-left: 20px;
  text-align: left;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.borderColor};
  &:hover {
    border: 2px solid lavender;
    transition: border 0.3s ease-in-out;
  }
`;
