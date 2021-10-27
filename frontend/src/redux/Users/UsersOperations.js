import * as usersActions from "./UsersActions";
import * as API from "../../api/api";
import * as NotificationActions from "../Notifications/NotificationsActions";
export const getUsers = (token) => (dispatch) => {
  dispatch(usersActions.getUsersStart(token));
  API.getUsers(token)
    .then((res) => {
      dispatch(usersActions.getUsersSuccess(res.data));
    })
    .catch((err) => dispatch(usersActions.getUsersError(err)));
};

export const createUser = (token, user) => (dispatch) => {
  dispatch(usersActions.createUserStart());
  API.createUser(token, user)
    .then((res) => {
      if (res.data.error) {
        return dispatch(usersActions.createUserError(res.data.error));
      }
      dispatch(usersActions.createUserSucces(res.data));
    })
    .catch((err) => {
      dispatch(usersActions.createUserError(err));
    });
};

export const deleteUser = (token, id) => (dispatch) => {
  dispatch(usersActions.deleteUserStart());
  API.deleteUser(token, id)
    .then((res) => {
      if (res.data.error) {
        return dispatch(usersActions.deleteUserError(res.data.error));
      }
      dispatch(usersActions.deleteUserSuccess(res.data.id));
    })
    .catch((err) => {
      dispatch(usersActions.deleteUserError(err));
    });
};
