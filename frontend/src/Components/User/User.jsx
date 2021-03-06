import React from "react";
import style from "./User.module.css";
import Button from "@material-ui/core/Button";


export default function User({ user,deleteUserHandler }) {
  return (
    <div className={style.wrapper}>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <span>{user.login}</span>
      <span>{user.isAdmin ? "Адміністратор" : "Користувач"}</span>
      <Button
        variant="contained"
        color="secondary"
        onClick={()=>deleteUserHandler(user.id)}
      >
        Видалити
      </Button>
    </div>
  );
}
