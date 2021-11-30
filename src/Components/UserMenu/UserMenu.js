import { useDispatch, useSelector } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
import { Form, Button } from "react-bootstrap";
import { logoutThunk } from "../../Redux/thunk";
import { getUsername } from "../../Redux/auth-selectors";
import avatar from "../../icons/pineapple.png";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  const name = useSelector(getUsername);
  console.log(getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <Button className={s.btn} onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}
