import { FaPhone, FaTrashAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <ul className={s.contactText}>
        <li className={s.contactName}>
          <FaPhone className={s.contactIcon} /> {name}
        </li>
        <li className={s.contactNumber}>{number}</li>
      </ul>
      <button
        className={s.deletBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        <FaTrashAlt /> Delete
      </button>
    </li>
  );
};

export default Contact;
