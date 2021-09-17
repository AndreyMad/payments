import AuthPage from '../Pages/AuthPage/AuthPage.jsx'
import MainPage from '../Pages/MainPage/MainPage.jsx'
import StatPage from '../Pages/StatPage/StatPage.jsx'
import UsersPage from '../Pages/UsersPage/UsersPage.jsx'

export default {
    AUTH_PAGE: {
      path: "/auth",
      component: AuthPage
    },
    MAIN_PAGE:{
      path:"/main",
      component: MainPage
    },
    STAT_PAGE:{
      path:"/stat",
      component: StatPage
    },
    USERS_PAGE:{
      path:"/userspage",
      component: UsersPage
    }
  };