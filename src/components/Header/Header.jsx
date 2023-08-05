import React from "react";

import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <div className={css.navList}>
        <NavLink className={css.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={css.navItem} to="/movies">
          Movies
        </NavLink>
      </div>
    </div>
  );
};



