import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "./AuthNav";
// import { authSelectors } from "../redux/auth";
import { getIsLoggedIn } from "../../Redux/auth-selectors";
import { Navbar, Nav, Container } from "react-bootstrap";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Navbar>
    </header>
  );
}
