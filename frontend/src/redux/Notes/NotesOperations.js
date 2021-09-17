import * as notesActions from "./NotesActions";
import * as API from "../../api/api";

export const getNotes = (token) => (dispatch) => {
  dispatch(notesActions.getNotesStart(token));
  API.getNotes(token)
    .then((res) => {
      dispatch(notesActions.getNotesSuccess(res.data));
    })
     .catch((err) => dispatch(notesActions.getNotesError(err)));
};
