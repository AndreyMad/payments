import React, { Component } from 'react'
import style from './AuthPage.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class AuthPage extends Component {
    state ={
        userName:'',
        password:''
    }

    handleChange =({target})=>{
        this.setState({
            [target.id]:target.value
        })
    }

    render() {
        const {userName, password }=this.state
        return (
            <section className={style.wrapper}>
                <form className={style.formContainer}>
                    <p>Авторизація</p>
                <TextField id="userName" label='Логин' onChange={this.handleChange} className={style.input} value={userName}></TextField>
                <TextField type='password' id="password" label='Пароль' onChange={this.handleChange} className={style.input} value={password}></TextField>
                <Button variant="contained" color="primary" className={style.submitBtn}>Вхід</Button>
                </form>
            </section>
        )
    }
}
