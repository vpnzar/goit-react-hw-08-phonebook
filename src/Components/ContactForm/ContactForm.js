import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import s from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from "../Services/contactsApi";

function ContactForm() {
  const { data } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  // const dispatch = useDispatch();
  // const contactsAll = useSelector(getContacts);
  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();
  const id = uuidv4();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contact = { name, number, id };

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    const filterResult = data.some((value) => value.name === contact.name);
    if (!filterResult) {
      await addContact(contact);
    } else alert(`${contact.name} is already in contacts`);
    name.value = "";
    number.value = "";
  };

  return (
    <div className={s.Phonebook}>
      <h2>Add Contact:</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChangeEvent}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChangeEvent}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {isAdding ? "Adding" : "Add Contact"}
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
