import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./App.module.css";
import { io } from "socket.io-client";
import Header from './Header/Header'
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import  routes from "../routes/routes";
// import Header from "./Header/Header";
import * as Selectors from "../redux/Selectors";
// import Loader from "../components/Loader/Loader";
// import * as authOperations from "../redux/Auth/authOperations";

// function App({match}) {
// console.log('%cApp.js line:7 location.url', 'color: #007acc;', match);
// const socket = io("http://localhost:80", {
//   path:"/payments",
//   query:{x:221231231232}
// });

// socket.on('message', function(data){console.log(data)});

class App extends Component {
  // componentDidMount() {
  //   const { refresh } = this.props;
  //   refresh();
  // }
  componentDidUpdate(prevProps) {
    if (prevProps.notifications !== this.props.notifications) {
      const { notifications } = this.props;
      if (!!notifications) {
        switch (notifications.type) {
          case "warning":
            return NotificationManager.warning(
              `${notifications.message}`,
              "",
              2000
            );
          case "success":
            return NotificationManager.success(
              `${notifications.message}`,
              "",
              2000
            );
          case "error":
            return NotificationManager.error(
              `${notifications.message}`,
              "",
              2000
            );

          default:
            return null;
        }
      }
    }
  }

  render() {
    const { isLoading, isAuth } = this.props;
    return (
      <>
        {/* {isLoading ? <Loader /> : null} */}
        {isAuth?<Header/>:null}
        <NotificationContainer></NotificationContainer>
 
        <Switch>
          <Route
            exact
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
         <ProtectedRoute
            path={routes.STAT_PAGE.path}
            component={routes.STAT_PAGE.component}
          />
           {/* <ProtectedRoute
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <ProtectedRoute
            exact
            path={routes.USERS_PAGE.path}
            component={routes.USERS_PAGE.component}
          />
          <ProtectedRoute
            exact
            path={routes.USERS_DETAIL_PAGE.path}
            component={routes.USERS_DETAIL_PAGE.component}
          />*/}
          <Route
            to={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          /> 
          <Redirect to={routes.MAIN_PAGE.path}/>
        </Switch>
      </>
    );
  }
}

 const mSTP = (store) => ({
  isAuth: Selectors.getIsAuth(store)

 })
// const mSTP = (store) => ({
//   isLoading: Selectors.getIsLoading(store),
//   error: Selectors.getError(store),
//   notifications: Selectors.getNotification(store),
// });

// const mDTP = (dispatch) => ({
//   refresh: () => dispatch(authOperations.refresh()),
// });

 export default connect(mSTP, null)(App);
// export default App;
