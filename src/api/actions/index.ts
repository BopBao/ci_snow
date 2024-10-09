/// AXIOS ///
import axios from "axios";
/// REDUX ///
import { Dispatch } from "redux";
/// ACTIONS ///
import { Action } from "api/action_types/form";
/// ACTION TYPES ///
import { ActionType } from "api/action_types/form";
/// TYPES ///
import { FormFields } from "components/quote_form/form";
/// KEY ///
import { form_key } from "settings";

export const submit = (form: FormFields) => {
  return async (dispatch: Dispatch<Action>) => {

    const submit_url: string = `https://api.capitalirrigation.com/api/snow_submit_form/?${form_key}`;

    dispatch({
      type: ActionType.SUBMITTING
    });

    try {
      await axios.post(submit_url, form, {});

      dispatch({
        type: ActionType.SUBMIT_SUCCESS
      });
    }
    catch (err) {
      dispatch({
        type: ActionType.SUBMIT_ERROR,
        error: "Sorry! There was a problem processing the form. Please give us a call at 780-989-3987 or email us at customerservice@capitalirrigation.com"
      });
    }
  }
}
