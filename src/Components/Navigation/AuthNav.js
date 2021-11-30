import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <Nav className={s.linkRegistration}>
        <NavLink
          to="/login"
          className={s.navLink}
          activeClassName={s.activeNavLink}
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={s.navLink}
          activeClassName={s.activeNavLink}
        >
          Register
        </NavLink>
      </Nav>
    </div>
  );
}
