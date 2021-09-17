import * as usersActions from "./UsersActions";
import * as API from "../../api/api";

export const getUsers = (token) => (dispatch) => {
  dispatch(usersActions.getUsersStart(token));
  API.getUsers(token)
    .then((res) => {
      dispatch(usersActions.getUsersSuccess(res.data));
    })
    .catch((err) => dispatch(usersActions.getUsersError(err)));
};

export const createUser = (token, user) => (dispatch) => {
  dispatch(usersActions.createUserStart(token, user));
  API.createUser(token, user)
    .then((res) => {
      console.log(res.data.error)
      if(res.data.error){dispatch(usersActions.createUserError(res.data.error)) }
      dispatch(usersActions.createUserSucces(res.data));
    })
    .catch((err) => {
      dispatch(usersActions.createUserError(err));
    });
};
