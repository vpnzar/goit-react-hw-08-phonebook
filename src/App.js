import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Switch } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Container from "./Components/Container/Container";
import AppBar from "../src/Components/Navigation/AppBar";
import PublicRoute from "./Components/Routes/PublicRoute";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import { Login } from "./Components/Pages/Login";
import { Register } from "./Components/Pages/Register";
import { currentUserThunk } from "./Redux/thunk";
const Home = lazy(() =>
  import("./Components/Pages/Home.js" /* webpackChunkName: "Home" */)
);
const Contacts = lazy(() =>
  import("./Components/Pages/Contacts.js" /* webpackChunkName: "Home" */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <Register />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <Login />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
