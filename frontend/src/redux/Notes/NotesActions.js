import types from "../Types";

export const getNotesStart = (token) => ({
  type: types.GET_NOTES_START,
  payload: { token },
});

export const getNotesSuccess = (notes) => ({
    type: types.GET_NOTES_SUCCESS,
    payload: {
      notes,
    },
  });
  export const getNotesError = (error) => ({
    type: types.GET_NOTES_ERROR,
    payload: {
      error,
    },
  });