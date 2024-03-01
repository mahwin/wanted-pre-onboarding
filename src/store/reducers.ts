import { combineReducers } from "redux";
import { DELETE_TODO, ADD_TODO, CHANGE_INPUT, ActionTypes } from "./types";

interface TodoListState {
  lists: string[];
  inputData: string;
}

const initialTodoListState: TodoListState = {
  lists: [],
  inputData: "",
};

const todoListReducer = (state = initialTodoListState, action: ActionTypes) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      if (action.payload === "") return state;
      return {
        ...state,
        lists: [...state.lists, action.payload],
        inputData: "",
      };
    case DELETE_TODO:
      return {
        ...state,
        lists: state.lists.filter((_, index) => index != action.payload),
      };
    case CHANGE_INPUT:
      return {
        ...state,
        inputData: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  todoList: todoListReducer,
});
