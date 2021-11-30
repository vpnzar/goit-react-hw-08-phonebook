import { NavLink } from "react-router-dom";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import s from "./Navigation.module.css";

const Navigation = () => {
  // const dispatch = useDispatch();

  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/contacts"
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
