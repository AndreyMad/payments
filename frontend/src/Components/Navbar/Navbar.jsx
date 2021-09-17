import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import routes from "../../routes/routes";

export default function Navbar() {
  return (
    <>
      <ul className={style.navList}>
        <li className={style.listItem}>
          <NavLink
            activeClassName={style.navLinkActive}
            className={style.navLink}
            to={routes.MAIN_PAGE.path}
          >
            Головна
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink
            activeClassName={style.navLinkActive}
            className={style.navLink}
            to={routes.STAT_PAGE.path}
          >
            Статистика
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink
            activeClassName={style.navLinkActive}
            className={style.navLink}
            to={routes.USERS_PAGE.path}
          >
           Управління користувачами
          </NavLink>
        </li>
        <li className={style.listItem}>
          <button>Вихід</button>
        </li>
      </ul>
    </>
  );
}
