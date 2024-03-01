export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const CHANGE_INPUT = "CHANGE_INPUT";

interface AddAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface DeleteAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface ChangeInputAction {
  type: typeof CHANGE_INPUT;
  payload: string;
}

export type ActionTypes = AddAction | DeleteAction | ChangeInputAction;
