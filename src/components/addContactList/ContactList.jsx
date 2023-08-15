import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import { deleteContactThunk } from 'redux/contactsOperations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);
  
  const onDelete = id => {
    dispatch(deleteContactThunk(id));
  };
 
  // const onFilterContact = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filtered = onFilterContact();
  const filtered=useSelector(selectFilteredContacts)

  return (
    <ul className={css.contactsList}>
      {filtered.map(contact => (
        
        <li key={contact.id} className={css.listItem}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            onClick={() => onDelete(contact.id)}
            className={css.deleteBtn}
          ></button>
        </li>
      ))}
    </ul>
  );
};
