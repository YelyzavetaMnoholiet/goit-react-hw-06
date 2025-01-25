import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  console.log("Contacts from Redux:", contacts);
  const filter = useSelector((state) => state.filter.name.toLowerCase());

  const contactFilter = Array.isArray(contacts)
    ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
    : [];

  console.log("Filtered Contacts:", contactFilter);

  return (
    <ul className={s.contactsList}>
      {contactFilter.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
