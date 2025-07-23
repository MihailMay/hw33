import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsReducer';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;