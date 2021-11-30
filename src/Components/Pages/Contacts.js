import s from "./Contacts.module.css";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
const ContactForm = lazy(() =>
  import("../ContactForm/ContactForm.js" /* webpackChunkName: "ContactForm" */)
);
const ContactList = lazy(() =>
  import("../ContactList/ContactList.js" /* webpackChunkName: "ContactList" */)
);

export default function HomeView() {
  return (
    <div className={s.App}>
      <ContactForm />
      <ContactList />
    </div>
  );
}
