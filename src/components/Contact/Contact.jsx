import { FaPhone, FaTrashAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className="contact-item">
      <span>
        <FaPhone /> {contact.name}: {contact.number}
      </span>
      <button onClick={() => onDelete(contact.id)} className={s.deletBtn}>
        <FaTrashAlt /> Видалити
      </button>
    </li>
  );
};

export default Contact;
