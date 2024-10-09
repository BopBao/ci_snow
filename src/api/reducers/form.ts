/// ACTION ///
import { Action } from "api/action_types/form";
/// ACTION TYPE ///
import { ActionType } from "api/action_types/form";

interface State {
  submitting: boolean,
  submit_complete: boolean,
  error: string
}

const initialState = {
  submitting: false,
  submit_complete: false,
  error: ""
}

export const formReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SUBMITTING:
      return {
        ...state,
        submitting: true
      }
    case ActionType.SUBMIT_SUCCESS:
      return {
        ...state,
        submitting: false,
        submit_complete: true
      }
    case ActionType.SUBMIT_ERROR:
      return {
        ...state,
        submitting: false,
        error: action.error
      }
    default:
      return state;
  }
}



