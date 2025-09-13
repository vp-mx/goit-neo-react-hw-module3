import PropTypes from "prop-types"
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.listItem}>
                    <Contact name={name} number={number} onDelete={() => onDeleteContact(id) } />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;