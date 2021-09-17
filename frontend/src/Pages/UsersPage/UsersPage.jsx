import React, { Component } from "react";
import style from "./UsersPage.module.css";
import TextField from "@material-ui/core/TextField";
import User from "../../Components/User/User";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import * as Selectors from "../../redux/Selectors";
import * as usersOperations from "../../redux/Users/UsersOperations";
class AddUserPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    isAdmin: false,
  };

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  checkboxTogle = () => {
    this.setState((prevstate) => ({
      isAdmin: !prevstate.isAdmin,
    }));
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, login, password, isAdmin } = this.state;
    const { createUser } = this.props;
    const user = {
      firstName,
      lastName,
      login,
      password,
      isAdmin,
    };
    const token = "tokenasdfasdf";
    createUser(token, user);
  };

  render() {
    const { firstName, lastName, login, password, isAdmin } = this.state;
    const { users } = this.props;
    return (
      <div className={style.container}>
        <form className={style.formWrapper} onSubmit={this.handleSubmit}>
          <h2>Додати нового користувача</h2>
          <TextField
            id="firstName"
            label="Ім'я"
            onChange={this.handleChange}
            className={style.input}
            value={firstName}
          ></TextField>
          <TextField
            id="lastName"
            label="Прізвище"
            onChange={this.handleChange}
            className={style.input}
            value={lastName}
          ></TextField>
          <TextField
            id="login"
            label="Логин"
            onChange={this.handleChange}
            className={style.input}
            value={login}
          ></TextField>
          <TextField
            type="password"
            id="password"
            label="Пароль"
            onChange={this.handleChange}
            className={style.input}
            value={password}
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={isAdmin}
                onChange={this.checkboxTogle}
              ></Checkbox>
            }
            label="Адміністратор"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={style.submitBtn}
          >
            Додати
          </Button>
        </form>
        <div className={style.wrapper}>
          <ul className={style.list}>
            {users.map((user) => {
              return (
                <li className={style.listItem} key={user.id}>
                  <User user={user}></User>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mDTP = (dispatch) => ({
  getUsers: (token) => dispatch(usersOperations.getUsers(token)),
  createUser: (token, user) =>
    dispatch(usersOperations.createUser(token, user)),
});
const mSTP = (store) => ({
  users: Selectors.getUsers(store),
});
export default connect(mSTP, mDTP)(AddUserPage);
