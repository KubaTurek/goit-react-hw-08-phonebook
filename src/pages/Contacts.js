import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import css from './contacts.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/auth/selectors';


const Contacts = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

    return (isLoggedIn ?
        <div className={css.contacts}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div> : <p>You need to login first</p>
    )
}

export default Contacts;