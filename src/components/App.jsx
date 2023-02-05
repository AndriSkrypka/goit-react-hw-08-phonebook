import { ContactForm } from './ContactForm/ContactForm';

import Container from './Container/Container';

import { ToastContainer } from 'react-toastify';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';


export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading)
  return (
    <>
      <Container title="Phone book">
        <ToastContainer />
        <ContactForm />
        {isLoading ? <p>loading...</p> : <ContactList />}
      </Container>
    </>
  );
};






