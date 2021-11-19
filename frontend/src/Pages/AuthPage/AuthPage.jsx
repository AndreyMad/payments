import React, { Component } from "react";
import style from "./AuthPage.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as authOperations from '../../redux/Auth/authOperations'
import { connect } from "react-redux";

class AuthPage extends Component {
  state = {
    userLogin: "",
    password: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };


handleSubmit =()=>{
  const {userLogin, password}=this.state
  const {login}=this.props
  login({userLogin, password})
}
  render() {
    const { userLogin, password } = this.state;
    
    return (
      <section className={style.wrapper}>
        <form className={style.formContainer} onSubmit={this.handleSubmit}>
          <p>Авторизація</p>
          <TextField
            id="userLogin"
            label="Логин"
            onChange={this.handleChange}
            className={style.input}
            value={userLogin}
          ></TextField>
          <TextField
            type="password"
            id="password"
            label="Пароль"
            onChange={this.handleChange}
            className={style.input}
            value={password}
          ></TextField>
          <Button
          onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            className={style.submitBtn}
          >
            Вхід
          </Button>
        </form>
      </section>
    );
  }
}

const mDTP = (dispatch)=>({
  login:(user)=>dispatch(authOperations.login(user))
})

export default connect(null, mDTP)(AuthPage);
