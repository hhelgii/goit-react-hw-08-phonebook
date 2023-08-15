import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsReducer';

import css from './filteredContacts.module.css';
export const FilterContact = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onFilterChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};
