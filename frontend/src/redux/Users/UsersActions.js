import types from "../Types";

export const getUsersStart = (token) => ({
  type: types.GET_USERS_START,
  payload: { token },
});

export const getUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: {
      users,
    },
  });
  export const getUsersError = (error) => ({
    type: types.GET_USERS_ERROR,
    payload: {
      error,
    },
  });


  export const createUserStart =(token, user)=>({
    type: types.CREATE_USER_START,
    payload:{
      token,user
    }
  })
  export const createUserSucces =(user)=>({
    type: types.CREATE_USER_SUCCESS,
    payload:{
     user
    }
  })
  export const createUserError =(error)=>({
    type: types.CREATE_USER_ERROR,
    payload:{
     error
    }
  })

  
  export const deleteUserStart =(token, id)=>({
    type: types.DELETE_USER_START,
    payload:{
      token,id
    }
  })
  export const  deleteUserSuccess  =(id)=>({
    type: types.DELETE_USER_SUCCESS,
    payload:{
     id
    }
  })
  export const  deleteUserError =(error)=>({
    type: types.DELETE_USER_ERROR,
    payload:{
     error
    }
  })