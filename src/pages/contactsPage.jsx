// make loader
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddContact } from 'components/addContactForm/AddContact';
import { ContactList } from 'components/addContactList/ContactList';
import { FilterContact } from 'components/filterContacts/FilterContact';
import { fetchContactsThunk, addContactThunk } from 'redux/contactsOperations';
import css from './contactspage.module.css';
const STORAGE_KEY = 'contacts';

const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();
    

    dispatch(addContactThunk({ name, number }));
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    // console.log(contacts)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts, dispatch]);

  return (
    <div className={css.container}>
      <div className={`${css.phoneContainer}`}>
        <h2>PhoneBook:</h2>
        <AddContact onHandleSubmit={onSubmit}></AddContact>
      </div>

      <div className={`${css.contactsContainer}`}>
        <h2>Contacts</h2>
        <FilterContact></FilterContact>
        <ContactList></ContactList>
      </div>
    </div>
  );
};
export default ContactsPage;
