import * as authActions from "./authActions";
import * as API from "../../api/api";


export const login = (user) => (dispatch) => {

    dispatch(authActions.loginStart());
  
    API.paymentAuthorization(user)
      // .then((res) => {  
        // if (res.data.status === "ERROR") {
        //   console.log(res.data.message)
        //   dispatch(authActions.loginError(res.data.message));
        // }
        // if (res.data.status === "SUCCES") {
        //   dispatch(authActions.loginSuccess(res.data));
  
        // }
      // })
      // .catch((err) => console.log('%cauthOperations.js line:36 err', 'color: #007acc;', err));
  };