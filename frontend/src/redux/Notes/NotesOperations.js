import * as notesActions from "./NotesActions";
import * as API from "../../api/api";

export const getNotes = (token) => (dispatch) => {
  dispatch(notesActions.getNotesStart(token));
  API.getNotes(token)
    .then((res) => {
        console.log('%cNotesOperations.js line:8 res.data', 'color: #007acc;', res.data);
      dispatch(notesActions.getNotesSuccess(res.data));
    })
     .catch((err) => dispatch(notesActions.getNotesError(err)));
};
