import { combineReducers } from "redux";
import types from "./Types";


const token = (state = 'newtoken', { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return payload.data.token;

    case types.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
    case types.REFRESH_SUCCESS:
      return null;

    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.REFRESH_START:
    case types.CREATE_PROFILE_START:
    case types.GET_PROFILES_START:
    case types.UPDATE_PROFILE_START:
    case types.DELETE_PROFILE_START:
      return true;

    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_ERROR:
    case types.REFRESH_SUCCESS:
    case types.REFRESH_ERROR:
    case types.UPDATE_PROFILE_SUCCESS:
    case types.UPDATE_PROFILE_ERROR:
    case types.GET_PROFILES_ERROR:
    case types.GET_PROFILES_SUCCESS:
    case types.CREATE_PROFILE_SUCCESS:
    case types.CREATE_PROFILE_ERROR:
    case types.DELETE_PROFILE_ERROR:
    case types.DELETE_PROFILE_SUCCESS:
      return false;

    default:
      return state;
  }
};

const isAuth = (state = true, { type }) => {
  switch (type) {
    case types.LOGIN_START:
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
    case types.REFRESH_START:
    case types.REFRESH_ERROR:
      return false;

    case types.LOGIN_SUCCESS:
    case types.REFRESH_SUCCESS:
      return true;

    default:
      return state;
  }
};
const notesReducer =(state=[], {type,payload})=>{

switch (type) {
  case types.GET_NOTES_SUCCES:
    return payload.notes


    default:
      return state
}

}
// const usersReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.GET_USERS_SUCCESS:
//       return payload.users;

//     case types.CREATE_USERS_SUCCESS:
//       return [...state, payload.users];

//     case types.UPDATE_USERS_SUCCESS:
//       return [
//         ...state.map((user) => {
//           if (user.id === payload.user.id) {
//             return { ...payload.user };
//           }
//           return user;
//         }),
//       ];

//     case types.DELETE_USER_SUCCESS:
//       return [
//         ...state.filter((user) => {
//           return user.id !== payload.id;
//         }),
//       ];

//     case types.GET_USERS_ERROR:
//     case types.CREATE_USERS_ERROR:
//     case types.UPDATE_USERS_ERROR:
//     case types.DELETE_USERS_ERROR:
//       return state;

//     case types.RESET_USERS_STORE:
//       return [];

//     default:
//       return state;
//   }
// };

// const notificationReducerInitialState = {
//   isVisible: false,
//   type: "",
//   message: "",
// };
// const notificationReducer = (
//   state = notificationReducerInitialState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.LOGIN_START:
//     case types.LOGOUT_START:
//     case types.REFRESH_START:
//     case types.CREATE_PROFILE_START:
//     case types.GET_PROFILES_START:
//     case types.UPDATE_PROFILE_START:
//     case types.DELETE_PROFILE_START:
//       return state;

//     case types.LOGIN_SUCCESS:
//       return {
//         isVisible: true,
//         type: "success",
//         message: `Hello ${payload?.data?.user?.name}!!!`,
//       };

//     case types.LOGOUT_SUCCESS:
//       return { isVisible: true, type: "warning", message: "See you!!!" };

//     case types.UPDATE_PROFILE_SUCCESS:
//       return { isVisible: true, type: "success", message: "Profile updated" };

//     case types.CREATE_PROFILE_SUCCESS:
//       return { isVisible: true, type: "success", message: "Profile added" };

//     case types.DELETE_PROFILE_SUCCESS:
//       return { isVisible: true, type: "success", message: "Profile deleted" };

//     case types.LOGIN_ERROR:
//     case types.LOGOUT_ERROR:
//     case types.REFRESH_ERROR:
//     case types.UPDATE_PROFILE_ERROR:
//     case types.GET_PROFILES_ERROR:
//     case types.CREATE_PROFILE_ERROR:
//     case types.DELETE_PROFILE_ERROR:
//       return {
//         status: "error",
//         type: "error",
//         message: payload.error || "NO MESSAGE",
//       };

//     default:
//       return null;
//   }
// };
export default combineReducers({
  token,
  error,
  isLoading,
  isAuth,
  notes: notesReducer,
//   notification: notificationReducer,
});