// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { AddContact } from './components/addContactForm/AddContact';
// import { ContactList } from './components/addContactList/ContactList';
// import { FilterContact } from './components/filterContacts/FilterContact';
// import { fetchContactsThunk,addContactThunk } from 'redux/contactsOperations';
// import css from './app.module.css';
// const STORAGE_KEY = 'contacts';

// export const App = () => {
//   const contacts = useSelector(state => state.contacts.contacts.items);
//   const dispatch = useDispatch();

//   const onSubmit = event => {
//     event.preventDefault();
//     const name = event.target.name.value.trim();
//     const number = event.target.number.value.trim();
//     // dispatch(setContacts([...contacts, { name, number, id: nanoid() }]));
//     dispatch(addContactThunk({name,phone:number,id:nanoid()}))
//   };

//   useEffect(() => {
//     dispatch(fetchContactsThunk())
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts, dispatch]);

//   return (
//     <div
//       className={`${css.container} ${css.containerStar}`}
//     >
//       <div className={`${css.phoneContainer}`}>
//         <h2>PhoneBook:</h2>
//         <AddContact onHandleSubmit={onSubmit}></AddContact>
//       </div>

//       <div className={`${css.contactsContainer}`}>
//         <h2>Contacts</h2>
//         <FilterContact></FilterContact>
//         <ContactList></ContactList>
//       </div>

//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//       <div className={`${css.star1}`}></div>
//     </div>
//   );
// };

import { Suspense, lazy, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import { Loader } from 'components/loader/loader';

import PrivateRoute from 'components/privateRoute/privateRoute';
import css from 'app.module.css';

const HomePage = lazy(() => import('pages/homePage'));
const RegisterPage = lazy(() => import('pages/registerPage'));
const LoginPage = lazy(() => import('pages//loginPage'));
const ContactsPage = lazy(() => import('pages/contactsPage'));
export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
 
  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" >HomePage</NavLink>
          {authentificated ? (
            <>
              <NavLink to="/contacts" >Contacts</NavLink>
              <button onClick={handleLogOut} className={css.logoutButton}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/login" >Sign in</NavLink>
              <NavLink to="/register" >Sign up</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <div className={`${css.container}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
          </Suspense>
  
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
          <div className={`${css.star1}`}></div>
        </div>
      </main>
    </div>
  );
};
