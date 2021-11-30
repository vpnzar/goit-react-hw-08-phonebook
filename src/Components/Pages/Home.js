import s from "./Home.module.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function HomeView() {
  const notify = () => toast("Please login or registered.");

  useEffect(() => {
    notify();
  });

  return (
    <div className={s.homeContainer}>
      <h1 className={s.title}>
        Hello👋🏼 This app allows you to save all your contacts.
        <ToastContainer
          position="top-center"
          autoClose="10000"
          // closeButton="false"
          hideProgressBar="true"
          role="alert"
          style={{ width: "350px" }}
        />
      </h1>
    </div>
  );
}
