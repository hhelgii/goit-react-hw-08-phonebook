import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    const lowFilter = filter.toLowerCase();
    return items.filter(({ name }) => name.toLowerCase().includes(lowFilter));
  }
);
