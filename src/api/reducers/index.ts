import { combineReducers } from "redux";
import { formReducer } from "./form";

const reducers = combineReducers({
  form: formReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
