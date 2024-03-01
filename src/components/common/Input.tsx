import styled from "styled-components";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ onChangeHandler, value }, ref) => {
    return <MyInput ref={ref} onChange={onChangeHandler} value={value} />;
  }
);

const MyInput = styled.input`
  height: 2rem;
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.borderColor};

  &:focus {
    outline: none;
  }
  padding-left: 20px;
  color: ${({ theme }) => theme.color};
`;

export { Input };
