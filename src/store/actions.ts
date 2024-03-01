import { ADD_TODO, DELETE_TODO, CHANGE_INPUT } from "./types";

export const addTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: number) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const changeInput = (payload: string) => {
  return {
    type: CHANGE_INPUT,
    payload,
  };
};
