import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { lazy } from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { getFilter } from "../../Redux/contacts-selectors";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../Services/contactsApi";
const Filter = lazy(() =>
  import("../Filter/Filter.js" /* webpackChunkName: "Filter" */)
);

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const InputValue = useSelector(getFilter);
  const { data, error, isLoading, isError } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const contactsNotFoundError = isError && error;
  console.log(contacts);
  useEffect(() => {
    try {
      setContacts(
        data.filter(({ name }) =>
          name.toLowerCase().includes(InputValue.toLowerCase())
        )
      );
    } catch (error) {
      return error;
    }
  }, [data, InputValue]);

  return (
    <div className={s.ContactsList}>
      <div className={s.ContactsListFilter}>
        <h2>Contacts List:</h2>
        <Filter />
      </div>

      {isLoading && <h2>Wait...</h2>}
      {InputValue && contacts.length === 0 && <h2>No results were found...</h2>}
      {contactsNotFoundError && <h2>Error...</h2>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Number</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map(({ name, id, phone }, a = 1) => (
              <tr key={id}>
                <td>{++a}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                  <Button
                    variant="link"
                    onClick={() => {
                      deleteContact(id);
                    }}
                  >
                    {isDeleting ? "Deleting" : "Delete"}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
