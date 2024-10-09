export enum ActionType {
  SUBMITTING = "SUBMITTING",
  SUBMIT_SUCCESS = "SUBMIT_SUCCESS",
  SUBMIT_ERROR = "SUBMIT_ERROR"
}

interface submitting {
  type: ActionType.SUBMITTING
}

interface submitSuccess {
  type: ActionType.SUBMIT_SUCCESS
}

interface submitError {
  type: ActionType.SUBMIT_ERROR,
  error: string
}

export type Action =
  submitting |
  submitSuccess |
  submitError;
